import { leftPresets, rightPresets } from '../data/vfs-presets.js';
import { showToast } from './brand-exporter.js';

let activePane = 'left';
let activeLeftKey = 'usb_ntfs';
let activeRightKey = 'sftp_nas';
let leftFocusIndex = 0;
let rightFocusIndex = 0;

function createMetaRow(label, value, valueClass) {
    const row = document.createElement('div');
    row.className = 'flex items-start justify-between gap-2 py-0.5';
    const labelSpan = document.createElement('span');
    labelSpan.className = 'text-slate-400 shrink-0';
    labelSpan.textContent = label;
    const valSpan = document.createElement('span');
    valSpan.className = `${valueClass} text-right break-tech`;
    valSpan.textContent = value;
    row.appendChild(labelSpan);
    row.appendChild(valSpan);
    return row;
}

export function updateInspector(file) {
    if (!file) return;
    const nameEl = document.getElementById('inspectorName');
    const metaEl = document.getElementById('inspectorMeta');
    const bridgeEl = document.getElementById('inspectorBridge');
    if (nameEl) nameEl.textContent = file.name;
    if (metaEl) {
        metaEl.textContent = '';
        metaEl.appendChild(createMetaRow('Размер:', file.size, 'text-slate-200 font-semibold'));
        metaEl.appendChild(createMetaRow('Поток:', file.stream, 'text-emerald-400'));
        metaEl.appendChild(createMetaRow('Маршрут:', file.audio, 'text-cyan-300'));
    }
    if (bridgeEl) {
        bridgeEl.textContent = file.bridge || 'ZiloreVfsBridge.pipeStreamWithCheckpoint (128KB Pool)';
    }
}

function updatePresetButtons() {
    document.querySelectorAll('[data-left-preset]').forEach(btn => {
        const isCurrent = btn.getAttribute('data-left-preset') === activeLeftKey;
        btn.classList.toggle('preset-btn-active', isCurrent);
    });
    document.querySelectorAll('[data-right-preset]').forEach(btn => {
        const isCurrent = btn.getAttribute('data-right-preset') === activeRightKey;
        btn.classList.toggle('preset-btn-right-active', isCurrent);
    });
}

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
        row.className = `w-full text-left px-3 py-2.5 rounded-xl font-mono text-xs flex items-center justify-between gap-2 transition-all border ${
            isFocused
                ? 'dpad-active border-cyan-400 text-white'
                : 'bg-obsidian-950/60 hover:bg-slate-800/70 border-slate-800/80 text-slate-300'
        }`;
        row.onclick = () => {
            activePane = pane;
            if (pane === 'left') leftFocusIndex = idx;
            else rightFocusIndex = idx;
            updateInspector(file);
            renderFileList('left');
            renderFileList('right');
        };
        const nameSpan = document.createElement('span');
        nameSpan.className = 'truncate font-medium';
        nameSpan.textContent = file.name;
        const sizeSpan = document.createElement('span');
        sizeSpan.className = 'text-[11px] text-slate-400 shrink-0';
        sizeSpan.textContent = file.size;
        row.appendChild(nameSpan);
        row.appendChild(sizeSpan);
        fragment.appendChild(row);
    });
    container.textContent = '';
    container.appendChild(fragment);
}

export function loadLeftPreset(key) {
    if (!leftPresets[key]) return;
    activeLeftKey = key;
    leftFocusIndex = 0;
    activePane = 'left';
    const pathEl = document.getElementById('leftPanePath');
    const badgeEl = document.getElementById('leftFsBadge');
    if (pathEl) pathEl.textContent = leftPresets[key].path;
    if (badgeEl) badgeEl.textContent = leftPresets[key].badge;
    updatePresetButtons();
    updateInspector(leftPresets[key].files[0]);
    renderFileList('left');
    renderFileList('right');
}

export function loadRightPreset(key) {
    if (!rightPresets[key]) return;
    activeRightKey = key;
    rightFocusIndex = 0;
    activePane = 'right';
    const pathEl = document.getElementById('rightPanePath');
    const subEl = document.getElementById('rightPaneSubstatus');
    if (pathEl) pathEl.textContent = rightPresets[key].path;
    if (subEl) subEl.textContent = rightPresets[key].substatus;
    updatePresetButtons();
    updateInspector(rightPresets[key].files[0]);
    renderFileList('left');
    renderFileList('right');
}

export function simulateVfsBridgeTransfer() {
    const items = activePane === 'left' ? leftPresets[activeLeftKey].files : rightPresets[activeRightKey].files;
    const idx = activePane === 'left' ? leftFocusIndex : rightFocusIndex;
    const currentFile = items[idx] || items[0];
    if (!currentFile) return;
    const direction = activePane === 'left' ? 'Левая панель → Правая панель' : 'Правая панель → Левая панель';
    showToast(`⚡ ZiloreVfsBridge: ${currentFile.name} (${direction}) • Zero-Alloc 128KB Pool`);
}

export function initSimulatorKeyboardNav() {
    window.addEventListener('keydown', (e) => {
        const tag = document.activeElement?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;

        const leftItems = leftPresets[activeLeftKey].files;
        const rightItems = rightPresets[activeRightKey].files;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (activePane === 'left') {
                leftFocusIndex = (leftFocusIndex + 1) % leftItems.length;
                updateInspector(leftItems[leftFocusIndex]);
            } else {
                rightFocusIndex = (rightFocusIndex + 1) % rightItems.length;
                updateInspector(rightItems[rightFocusIndex]);
            }
            renderFileList('left');
            renderFileList('right');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (activePane === 'left') {
                leftFocusIndex = (leftFocusIndex - 1 + leftItems.length) % leftItems.length;
                updateInspector(leftItems[leftFocusIndex]);
            } else {
                rightFocusIndex = (rightFocusIndex - 1 + rightItems.length) % rightItems.length;
                updateInspector(rightItems[rightFocusIndex]);
            }
            renderFileList('left');
            renderFileList('right');
        } else if (e.key === 'ArrowRight' && activePane === 'left') {
            e.preventDefault();
            activePane = 'right';
            updateInspector(rightItems[rightFocusIndex] || rightItems[0]);
            renderFileList('left');
            renderFileList('right');
        } else if (e.key === 'ArrowLeft' && activePane === 'right') {
            e.preventDefault();
            activePane = 'left';
            updateInspector(leftItems[leftFocusIndex] || leftItems[0]);
            renderFileList('left');
            renderFileList('right');
        }
    });
}
