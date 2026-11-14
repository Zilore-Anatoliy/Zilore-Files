import { leftPresets, rightPresets, getQuickToolConfig } from '../data/vfs-presets.js';
import { showToast } from './brand-exporter.js';

let activePane = 'left';
let activeLeftKey = 'usb_ntfs';
let activeRightKey = 'sftp_nas';
let leftFocusIndex = 0;
let rightFocusIndex = 0;

export function renderFileList(pane) {
    const container = document.getElementById(pane === 'left' ? 'leftFileList' : 'rightFileList');
    if (!container) return;
    const items = pane === 'left' ? leftPresets[activeLeftKey].files : rightPresets[activeRightKey].files;
    const focusIdx = pane === 'left' ? leftFocusIndex : rightFocusIndex;
    const fragment = document.createDocumentFragment();

    items.forEach((file, idx) => {
        const isFocused = (activePane === pane && focusIdx === idx);
        const row = document.createElement('button');
        row.type = 'button';
        row.className = `w-full text-left px-3 py-2.5 rounded-xl font-mono text-xs flex items-center justify-between gap-2 transition-all border ${isFocused ? 'dpad-active border-cyan-400 text-white' : 'bg-obsidian-950/60 hover:bg-slate-800/70 border-slate-800/80 text-slate-300'}`;
        row.onclick = () => {
            activePane = pane;
            if (pane === 'left') leftFocusIndex = idx; else rightFocusIndex = idx;
            updateInspector(file);
            renderFileList('left'); renderFileList('right');
        };
        const leftPart = document.createElement('div');
        leftPart.className = 'flex items-center gap-2.5 min-w-0';
        const nameSpan = document.createElement('span');
        nameSpan.className = 'truncate font-medium';
        nameSpan.textContent = file.name;
        leftPart.appendChild(nameSpan);
        const sizeSpan = document.createElement('span');
        sizeSpan.className = 'text-[11px] text-slate-400 shrink-0';
        sizeSpan.textContent = file.size;
        row.appendChild(leftPart); row.appendChild(sizeSpan);
        fragment.appendChild(row);
    });
    container.textContent = '';
    container.appendChild(fragment);
}

export function updateInspector(file) {
    if (!file) return;
    const nameEl = document.getElementById('inspectorName');
    const metaEl = document.getElementById('inspectorMeta');
    if (nameEl) nameEl.textContent = file.name;
    if (metaEl) {
        metaEl.innerHTML = `<div>Размер: <span class="text-slate-200">${file.size}</span></div><div>Поток: <span class="text-emerald-400">${file.stream}</span></div><div>Экран: <span class="text-cyan-300">${file.audio}</span></div>`;
    }
}

export function loadLeftPreset(key) {
    if (!leftPresets[key]) return;
    activeLeftKey = key; leftFocusIndex = 0; activePane = 'left';
    document.getElementById('leftPanePath').textContent = leftPresets[key].path;
    document.getElementById('leftFsBadge').textContent = leftPresets[key].badge;
    updateInspector(leftPresets[key].files[0]);
    renderFileList('left'); renderFileList('right');
}

export function loadRightPreset(key) {
    if (!rightPresets[key]) return;
    activeRightKey = key; rightFocusIndex = 0; activePane = 'right';
    document.getElementById('rightPanePath').textContent = rightPresets[key].path;
    document.getElementById('rightPaneSubstatus').textContent = rightPresets[key].substatus;
    updateInspector(rightPresets[key].files[0]);
    renderFileList('left'); renderFileList('right');
}

export function moveDpad(delta) {
    const items = activePane === 'left' ? leftPresets[activeLeftKey].files : rightPresets[activeRightKey].files;
    if (activePane === 'left') {
        leftFocusIndex = (leftFocusIndex + delta + items.length) % items.length;
        updateInspector(items[leftFocusIndex]);
    } else {
        rightFocusIndex = (rightFocusIndex + delta + items.length) % items.length;
        updateInspector(items[rightFocusIndex]);
    }
    renderFileList('left'); renderFileList('right');
}

export function switchActivePane() {
    activePane = activePane === 'left' ? 'right' : 'left';
    renderFileList('left'); renderFileList('right');
}

export function triggerSelectedFileAction() {
    const items = activePane === 'left' ? leftPresets[activeLeftKey].files : rightPresets[activeRightKey].files;
    const idx = activePane === 'left' ? leftFocusIndex : rightFocusIndex;
    const file = items[idx];
    if (file) openQuickTool(file.type === 'video' ? 'player' : 'office', file.name);
}

export function setUIMode(mode) {
    const rightPane = document.getElementById('rightPaneBox');
    if (rightPane) rightPane.classList.toggle('hidden', mode === 'mobile');
}

export function openQuickTool(tool, fileName) {
    const overlay = document.getElementById('simulatorOverlay');
    const title = document.getElementById('overlayTitle');
    const content = document.getElementById('overlayContent');
    if (!overlay || !title || !content) return;
    overlay.classList.remove('hidden');
    const cfg = getQuickToolConfig(tool, fileName || document.getElementById('inspectorName')?.textContent || '');
    title.textContent = cfg.t;
    content.textContent = cfg.c;
}

export function closeQuickTool() {
    document.getElementById('simulatorOverlay')?.classList.add('hidden');
}
