import { loadLeftPreset, loadRightPreset } from './modules/simulator.js';
import { fillSampleHash, copyOfficialHash, downloadSha256File, verifyApkHash, calculateLocalFileHash } from './modules/sha256-verifier.js';
import { showToast, copyTextToClipboard } from './modules/brand-exporter.js';

Object.assign(window, {
    loadLeftPreset, loadRightPreset,
    fillSampleHash, copyOfficialHash, downloadSha256File, verifyApkHash, calculateLocalFileHash,
    copyTextToClipboard,
    triggerDownloadToast: (f) => showToast('Запрос сборки ' + f)
});

window.addEventListener('DOMContentLoaded', () => {
    loadLeftPreset('usb_ntfs');
    loadRightPreset('sftp_nas');
    if (window.lucide) window.lucide.createIcons();
});
