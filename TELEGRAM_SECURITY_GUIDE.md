# 📱 Инструкция: Архитектура, настройка и защита Telegram-экосистемы (@zilorefiles & @zilorechat)

Данный регламент описывает конфигурацию официальной витрины релизов и технического форума поддержки проекта **Zilore Files (`zilore.app`)**.

---

## 1. Официальный канал релизов: [@zilorefiles](https://t.me/zilorefiles)
- **Назначение:** Публикация подписанных релизных сборок (`ZiloreFiles-universal.apk`), официальных списков изменений (`CHANGELOG.md`), архитектурных диаграмм и эталонных хэшей `SHA-256`.
- **Политика безопасности канала:**
  - Публикация только от имени администрации с цифровой подписью и сверкой `SHA-256` на [zilore.app/#security-audit](https://zilore.app/#security-audit).
  - В описании канала закреплена прямая ссылка на официальный домен `https://zilore.app` и ветку обсуждений `@zilorechat`.
  - Защита от фейков: запрет пересылки сторонних APK в комментариях.

---

## 2. Технический форум сообщества: [@zilorechat](https://t.me/zilorechat)
Форум работает в режиме **Topics (Темы)** с жёстким разделением потоков:
1. **`# Announcements & Releases`** — только чтение (зеркало релизов из `@zilorefiles`).
2. **`# Android TV & 4K Media Box`** — настройка на Xiaomi TV Box S (2nd Gen), Sony Bravia, Nvidia Shield, пульт D-Pad и `ZiloreRemoteStreamProxy`.
3. **`# USB OTG & Bulk SCSI Driver`** — работа с внешними SSD/NVMe боксами (`UsbBulkScsiEngine`, `RawUsbVfsUri`, NTFS/EXT4/exFAT).
4. **`# Network Hub & 5 Clouds`** — настройка SFTP/SSH PTY, SMBv3, WebDAV, DLNA, Wi-Fi Web Studio и облачных коннекторов.
5. **`# Bug Reports & Crash Logs`** — отчёты из `ZiloreCrashLogDispatcher` и `SettingsHardwareDiagnosticsSection`.

---

## 3. Правила автомодерации и защиты от вредоносных файлов
- **Блокировка исполняемых вложений:** В группе `@zilorechat` для обычных участников заблокирована отправка файлов `.apk`, `.apks`, `.xapk`, `.aab`, `.exe`, `.bat`, `.sh`, `.dex`, `.so`.
- **Антиспам-фильтр:** Автоматическое удаление внешних реферальных ссылок, рекламы и политического оффтопа.
- **Верификация сборок:** Любой пользователь может проверить целостность скачанного `ZiloreFiles-universal.apk` локально через Web Crypto API на странице `https://zilore.app/#security-audit` или сверить с файлом `ZiloreFiles-universal.apk.sha256`.
