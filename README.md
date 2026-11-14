<div align="center">

  <a href="https://zilore.app">
    <img src="./zilore_avatar_4k.svg" alt="Zilore Files Logo" width="144" height="144" />
  </a>

  <h1>⚡ Zilore Files</h1>

  <p>
    <strong>Системный двухпанельный файловый менеджер, сетевой хаб и аппаратный медиа-комбайн для Android &amp; Android TV</strong>
  </p>

  <p>
    <a href="https://zilore.app"><img src="https://img.shields.io/badge/Website-zilore.app-06B6D4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website zilore.app" /></a>
    <a href="https://t.me/zilorefiles"><img src="https://img.shields.io/badge/Telegram-@zilorefiles-0284C7?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Channel" /></a>
    <a href="https://t.me/zilorechat"><img src="https://img.shields.io/badge/Forum-@zilorechat-6366F1?style=for-the-badge&logo=telegram&logoColor=white" alt="Support Forum" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Android-8.0%2B%20(API%2026%2B)-10B981?style=flat-square&logo=android&logoColor=white" alt="Android 8.0+" />
    <img src="https://img.shields.io/badge/Android%20TV-10--Foot%20UI%20%26%20Channels-06B6D4?style=flat-square&logo=androidtv&logoColor=white" alt="Android TV" />
    <img src="https://img.shields.io/badge/USB%20SCSI-EXT4%20%7C%20NTFS%20%7C%20exFAT%20(No--Root)-38BDF8?style=flat-square" alt="USB OTG No-Root" />
    <img src="https://img.shields.io/badge/Network-SFTP%20%7C%20SMB%20%7C%20WebDAV%20%7C%20DLNA%20%7C%20Clouds-818CF8?style=flat-square" alt="Network & Clouds" />
    <img src="https://img.shields.io/badge/Media-AV1%20%7C%20Dolby%20Vision%20%7C%20Hi--Res-F59E0B?style=flat-square" alt="Media Engine" />
    <img src="https://img.shields.io/badge/Security-CryptoVault%20AES--256-10B981?style=flat-square" alt="CryptoVault AES-256" />
  </p>

</div>

---

> 🌐 **Официальный портал и проверка APK:** [https://zilore.app](https://zilore.app)

**Zilore Files** — многофункциональное двухпанельное приложение на базе выделенной модульной архитектуры (`:app` + `:core:fs-engine`) для смартфонов, планшетов, ТВ-приставок и **4K Smart TV**. Объединяет низкоуровневый драйвер `UsbBulkScsiEngine` для чтения/записи **EXT4 / NTFS / exFAT** без Root-прав, мультипротокольный сетевой и облачный клиент (**SFTP, SMB, FTP, WebDAV, DLNA, Google Drive, Yandex Disk, Mail.ru Cloud, NextCloud**), аппаратный медиаплеер **AV1 / Dolby Vision / Hi-Res Audio**, встроенный просмотрщик **Word (DOCX), Excel (XLSX/CSV), PDF**, **HEX-инспектор** и криптосейф **ZiloreCryptoVault (AES-256-GCM)**.

---

## 🏗 Архитектура проекта (`:app` + `:core:fs-engine`)

### 1. Полнодуплексный мост данных `Zilore VFS Bridge` (`:app ⇄ :core:fs-engine`)
<p align="center">
  <img src="./arch-01-vfs-bridge.svg" alt="Часть 1 — Мост данных Zilore VFS" width="100%" />
</p>

### 2. Пользовательский модуль `:app` (UI Screens, 4K Android TV & Services)
<p align="center">
  <img src="./arch-02-app-module.svg" alt="Часть 2 — Архитектура модуля :app" width="100%" />
</p>

### 3. Низкоуровневое ядро `:core:fs-engine` (VFS, USB SCSI, Networks & CryptoVault)
<p align="center">
  <img src="./arch-03-core-engine.svg" alt="Часть 3 — Архитектура ядра :core:fs-engine" width="100%" />
</p>

---

## 🛡 Безопасность и проверка SHA-256

* **Имя пакета:** `ZiloreFiles-universal.apk` (`ARM64-v8a` / `armeabi-v7a` / `x86_64`)
* **Эталонный `SHA-256`:**
  ```text
  8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4
  ```

```bash
# Проверка через файл манифеста:
sha256sum -c ZiloreFiles-universal.apk.sha256
```

---

## 💬 Сообщество и поддержка

* 🌐 **Официальный сайт:** [https://zilore.app](https://zilore.app)
* 📢 **Telegram-канал релизов:** [@zilorefiles](https://t.me/zilorefiles)
* 💬 **Технический форум поддержки:** [@zilorechat](https://t.me/zilorechat)
* 📧 **Почта для отчётов и предложений:** [ziloreapp@gmail.com](mailto:ziloreapp@gmail.com)
