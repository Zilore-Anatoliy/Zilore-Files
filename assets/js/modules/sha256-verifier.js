import { OFFICIAL_APK_SHA256 } from '../data/vfs-presets.js';
import { copyTextToClipboard, showToast } from './brand-exporter.js';

export function fillSampleHash() {
    const input = document.getElementById('userHashInput');
    if (input) {
        input.value = OFFICIAL_APK_SHA256;
        verifyApkHash();
    }
}

export function copyOfficialHash() {
    copyTextToClipboard(OFFICIAL_APK_SHA256, 'Эталонный SHA-256 скопирован');
}

export function downloadSha256File() {
    const blob = new Blob([`${OFFICIAL_APK_SHA256}  ZiloreFiles-universal.apk\n`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ZiloreFiles-universal.apk.sha256';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Файл ZiloreFiles-universal.apk.sha256 сохранён');
}

export function verifyApkHash() {
    const rawVal = document.getElementById('userHashInput')?.value || '';
    const userVal = rawVal.trim().toLowerCase().replace(/[^a-f0-9]/g, '');
    const resBox = document.getElementById('hashVerifyResult');
    if (!resBox) return;

    if (userVal.length === 64 && userVal === OFFICIAL_APK_SHA256) {
        resBox.className = 'p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 font-mono text-xs text-emerald-300';
        resBox.textContent = '✓ ПОДЛИННОСТЬ ПОДТВЕРЖДЕНА: Контрольная сумма SHA-256 совпадает с эталоном Zilore Files v27.0.0 (Build 178).';
    } else if (userVal.length === 64) {
        resBox.className = 'p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 font-mono text-xs text-rose-300';
        resBox.textContent = '✕ ВНИМАНИЕ: Хэш НЕ совпадает с официальной сборкой zilore.app! Не устанавливайте модифицированный APK.';
    } else if (userVal.length > 0) {
        resBox.className = 'p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/40 font-mono text-xs text-amber-300';
        resBox.textContent = `Введено символов: ${userVal.length} из 64 (требуется полный 256-битный HEX-хэш).`;
    } else {
        resBox.className = 'p-3.5 rounded-xl bg-obsidian-950/70 border border-slate-800 font-mono text-xs text-slate-400';
        resBox.textContent = 'Введите 64-символьный SHA-256 хэш или выберите локальный APK-файл для проверки через Web Crypto API.';
    }
}

export async function calculateLocalFileHash(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const resBox = document.getElementById('hashVerifyResult');
    if (resBox) {
        resBox.className = 'p-3.5 rounded-xl bg-sky-950/60 border border-sky-500/40 font-mono text-xs text-sky-300';
        resBox.textContent = `⏳ Вычисление SHA-256 для файла «${file.name}» (${(file.size / (1024 * 1024)).toFixed(2)} MB)...`;
    }
    try {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hexHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
        const input = document.getElementById('userHashInput');
        if (input) input.value = hexHash;
        verifyApkHash();
        showToast(`SHA-256 рассчитан: ${file.name}`);
    } catch (err) {
        if (resBox) {
            resBox.className = 'p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 font-mono text-xs text-rose-300';
            resBox.textContent = 'Ошибка чтения файла через Web Crypto API.';
        }
    }
}
