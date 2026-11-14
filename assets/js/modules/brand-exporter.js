export function showToast(text) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'px-4 py-3 rounded-xl bg-obsidian-950/95 border border-cyan-500/50 text-xs font-mono text-cyan-200 shadow-2xl transition-opacity duration-300';
    toast.setAttribute('role', 'status');
    toast.textContent = text;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

export async function copyTextToClipboard(text, message) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            showToast(message || 'Скопировано в буфер обмена');
            return;
        }
    } catch (_) {
        // Fallback below
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showToast(message || 'Скопировано в буфер обмена');
    } catch (_) {
        showToast('Не удалось скопировать автоматически');
    } finally {
        document.body.removeChild(ta);
    }
}
