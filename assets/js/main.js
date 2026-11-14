import { loadLeftPreset, loadRightPreset, moveDpad, switchActivePane, triggerSelectedFileAction, setUIMode, openQuickTool, closeQuickTool } from './modules/simulator.js';
import { fillSampleHash, copyOfficialHash, downloadSha256File, verifyApkHash, calculateLocalFileHash } from './modules/sha256-verifier.js';
import { showToast, copyTextToClipboard, copyRoseConfigCommands, downloadSvgBrandAsset } from './modules/brand-exporter.js';

Object.assign(window, {
    loadLeftPreset, loadRightPreset, moveDpad, switchActivePane, triggerSelectedFileAction, setUIMode, openQuickTool, closeQuickTool,
    fillSampleHash, copyOfficialHash, downloadSha256File, verifyApkHash, calculateLocalFileHash,
    copyTextToClipboard, copyRoseConfigCommands, downloadSvgBrandAsset,
    triggerDownloadToast: (f) => showToast('Запрос сборки ' + f)
});

window.addEventListener('DOMContentLoaded', () => {
    loadLeftPreset('usb_ntfs');
    loadRightPreset('sftp_nas');
    if (window.lucide) window.lucide.createIcons();
});
