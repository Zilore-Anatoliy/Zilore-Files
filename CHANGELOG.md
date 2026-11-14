# Changelog — Zilore Files (zilore.app)

## [v26.1.0] — Android 16 & 17 Hardened Edition
- Добавлен `ZiloreBiometricAndClipboardGuard` для биометрической защиты сейфа и автоочистки буфера обмена.
- Внедрен единый маршрутизатор форматов `FileViewerRouter` и секции `SettingsHardwareDiagnosticsSection` / `SettingsSecurityAuditSection`.
- Добавлена конфигурация сетевой безопасности `network_security_config.xml` и выделенный клиент `assets/webstudio/index.html`.
- Поддержка 5 облачных хранилищ (`Google Drive`, `Dropbox`, `Yandex Disk`, `Mail.ru Cloud`, `NextCloud`) и `UsbBulkScsiEngine` (до 348 МБ/с без Root).
