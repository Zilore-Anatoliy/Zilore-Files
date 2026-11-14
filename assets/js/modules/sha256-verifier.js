import { OFFICIAL_APK_SHA256 } from '../data/vfs-presets.js';
import { copyTextToClipboard, showToast } from './brand-exporter.js';

export function fillSampleHash() {
    const input = document.getElementById('userHashInput');
    if (input) { input.value = OFFICIAL_APK_SHA256; verifyApkHash(); }
}

export function copyOfficialHash() {
    copyTextToClipboard(OFFICIAL_APK_SHA256, 'Эталонный SHA-256 скопирован');
}

export function downloadSha256File() {
    const blob = new Blob([`${OFFICIAL_APK_SHA256}  ZiloreFiles-universal.apk\n`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'ZiloreFiles-universal.apk.sha256';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Файл .sha256 сохранён');
}

export function verifyApkHash() {
    const userVal = (document.getElementById('userHashInput')?.value || '').trim().toLowerCase().replace(/[^a-f0-9]/g, '');
    const resBox = document.getElementById('hashVerifyResult');
    if (!resBox) return;
    if (userVal.length === 64 && userVal === OFFICIAL_APK_SHA256) {
        resBox.className = 'p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 font-mono text-xs text-emerald-300';
        resBox.textContent = '✓ ПОДЛИННОСТЬ ПОДТВЕРЖДЕНА: SHA-256 совпадает с эталоном Zilore Files.';
    } else if (userVal.length === 64) {
        resBox.className = 'p-3 rounded-xl bg-rose-950/70 border border-rose-500/50 font-mono text-xs text-rose-300';
        resBox.textContent = '✕ ВНИМАНИЕ: Хэш НЕ совпадает с официальной сборкой zilore.app!';
    } else {
        resBox.className = 'p-3 rounded-xl bg-obsidian-950/70 border border-slate-800 font-mono text-xs text-slate-400';
        resBox.textContent = 'Введите 64-символьный SHA-256 хэш или выберите APK-файл для локальной проверки.';
    }
}

export async function calculateLocalFileHash(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hexHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    document.getElementById('userHashInput').value = hexHash;
    verifyApkHash();
}
