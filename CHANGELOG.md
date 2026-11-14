# Changelog — Zilore Files (zilore.app)

## [v27.0.0] (Build 178) — VFS Bridge & Cloud Stream Hardened Edition (2026-11-14)
- **Этап 1 (Unified Cross-Scheme VFS Bridge):** внедрён потоковый мост `ZiloreVfsBridge` (`pipeStreamWithCheckpoint`, `bridgeRemoteToRemote`), типобезопасный парсер блочных ссылок `RawUsbVfsUri` (`rawusb://cluster/...`), схема `VfsScheme.STREAM_PROXY` и автоматическая маскировка учётных данных `redactUriCredentials` в `ZiloreVfs.kt`.
- **Этап 2 (Cinema Stream Hardening):** реализован скользящий 2-часовой Idle-TTL тикетов (`lastAccessedAtMs`), строгий контроль границ `contentLen` (`pipeBoundedHttpStream`) для WebDAV, Google Drive и Dropbox, а также защита от `Broken pipe` (`writeChunkSafe`) при перемотке 4K-видео в `ZiloreRemoteStreamProxy.kt`.
- **Этап 3 (Zero-Allocation Cloud I/O):** модули `WebDavServiceModule`, `GoogleDriveServiceModule` и `DropboxServiceModule` переведены на `ZiloreVfsBridge.pipeStreamWithCheckpoint` с пулом `ZiloreByteBufferPool` (128 КБ) и публикацией живой скорости МБ/с в `FileOperationTaskQueue`; добавлен парсинг ISO-8601 `server_modified` в Dropbox.
- **Этап 4 (VFS Self-Test Suite):** модульный тестовый стенд `ZiloreCoreEngineTest.kt` расширен проверками `ZiloreVfsBridge`, `RawUsbVfsUri` и маскировки URI.

## [v26.1.1] (Build 177) — Android 16 (API 36) & Android 17 (API 37) Zero-Warnings Edition
- Перевод сборки на `compileSdk = 36` и `targetSdk = 36`, конфигурация `network_security_config.xml`, безопасная передача `ClipData.newRawUri` во всех внешних `Intent` и чистая сборка без предупреждений компилятора Kotlin.

## [v26.1.0] (Build 176) — Biometric Guard, FileViewerRouter & 5 Clouds Edition
- Добавлен `ZiloreBiometricAndClipboardGuard` для биометрической защиты криптосейфа и автоочистки буфера обмена.
- Внедрён единый маршрутизатор форматов `FileViewerRouter` и диагностические панели `SettingsHardwareDiagnosticsSection` / `SettingsSecurityAuditSection`.
- Поддержка 5 облачных хранилищ (`Google Drive`, `Dropbox`, `Yandex Disk`, `Mail.ru Cloud`, `NextCloud`) и `UsbBulkScsiEngine` (до 348 МБ/с без Root).
