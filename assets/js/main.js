import { loadLeftPreset, loadRightPreset, simulateVfsBridgeTransfer, initSimulatorKeyboardNav } from './modules/simulator.js';
import { fillSampleHash, copyOfficialHash, downloadSha256File, verifyApkHash, calculateLocalFileHash } from './modules/sha256-verifier.js';
import { showToast, copyTextToClipboard } from './modules/brand-exporter.js';

Object.assign(window, {
    loadLeftPreset,
    loadRightPreset,
    simulateVfsBridgeTransfer,
    fillSampleHash,
    copyOfficialHash,
    downloadSha256File,
    verifyApkHash,
    calculateLocalFileHash,
    copyTextToClipboard,
    triggerDownloadToast: (f) => showToast(`Проверка SHA-256 и загрузка сборки ${f} (v27.0.0 Build 178)`)
});

window.addEventListener('DOMContentLoaded', () => {
    loadLeftPreset('usb_ntfs');
    loadRightPreset('sftp_nas');
    initSimulatorKeyboardNav();
    if (window.lucide) window.lucide.createIcons();
});
