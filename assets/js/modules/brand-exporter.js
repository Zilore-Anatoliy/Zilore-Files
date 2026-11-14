export function showToast(text) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'px-4 py-3 rounded-xl bg-obsidian-950 border border-cyan-500/40 text-xs font-mono text-cyan-200 shadow-lg';
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

export function copyTextToClipboard(text, message) {
    navigator.clipboard?.writeText(text);
    showToast(message || 'Скопировано');
}
