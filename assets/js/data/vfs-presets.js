export const OFFICIAL_APK_SHA256 = '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4';

export const leftPresets = {
    usb_ntfs: {
        path: 'vfs://usb-scsi-01/Samsung_T7_NTFS/',
        badge: 'UsbBulkScsiEngine (NTFS)',
        files: [
            { name: 'Dune.Part.Two.2160p.DV.AV1.mkv', size: '24.8 GB', type: 'video', stream: 'AV1 10-bit • Dolby Vision', audio: 'VideoPlayer + CodecRegistry', icon: 'film' },
            { name: 'Financial_Roadmap_2026.xlsx', size: '1.42 MB', type: 'office', stream: 'XLSX Multi-Sheet Workbook', audio: 'SpreadsheetViewerScreen', icon: 'file-spreadsheet' },
            { name: 'Architecture_Spec_v23.docx', size: '840 KB', type: 'office', stream: 'OpenXML Word Document', audio: 'WordDocumentScreen', icon: 'file-text' },
            { name: 'SmartTube_Next_TV_Leanback.apks', size: '42.1 MB', type: 'package', stream: 'Split APK Bundle (ARM64)', audio: 'PackageInstallerService', icon: 'package' },
            { name: 'Cyberpunk_OST_HiRes_24_192.7z', size: '1.84 GB', type: 'archive', stream: '7-Zip LZMA2 Stream', audio: 'ZiloreAudioEngine FLAC', icon: 'file-archive' }
        ]
    },
    ext4_drive: {
        path: 'vfs://nvme-otg-02/linux_root_ext4/',
        badge: 'UsbRawPartitionReader (EXT4)',
        files: [
            { name: 'libzilore_scsi_bridge.so', size: '612 KB', type: 'hex', stream: 'ELF 64-bit LSB Shared Object', audio: 'HexBinaryViewerScreen', icon: 'binary' },
            { name: 'System_Manual_4K_TV.pdf', size: '12.6 MB', type: 'office', stream: 'PDF 1.7 Vector Document', audio: 'PdfViewerScreen', icon: 'book-open' },
            { name: 'deploy_sync_cluster.sh', size: '8.4 KB', type: 'code', stream: 'Bash Script (rwxr-xr-x)', audio: 'LocalShellSession', icon: 'terminal' },
            { name: 'Zilore_Plugin_Bundle.aab', size: '31.6 MB', type: 'package', stream: 'Android App Bundle', audio: 'PackageInstallerService', icon: 'package-plus' }
        ]
    },
    internal: {
        path: '/storage/emulated/0/ZiloreVault/',
        badge: 'SAF Browser + CryptoVault',
        files: [
            { name: 'Private_Keys_Backup.zvault', size: '128 MB', type: 'vault', stream: 'AES-256-GCM Encrypted Vault', audio: 'ZiloreCryptoVault (KeyStore)', icon: 'lock' },
            { name: 'ZiloreFiles-universal.apk', size: '28.4 MB', type: 'package', stream: 'APK Signature v3 Verified', audio: 'GithubUpdater Checked', icon: 'shield-check' },
            { name: 'vfs_network_registry.json', size: '4.8 KB', type: 'code', stream: 'UTF-8 JSON Config', audio: 'TextEditorScreen', icon: 'code-2' }
        ]
    }
};

export const rightPresets = {
    sftp_nas: {
        path: 'sftp://root@192.168.1.100:22/mnt/nas_vault/',
        substatus: 'SftpServiceModule (JSch + PTY) • SmbServiceModule • DLNA',
        files: [
            { name: 'SMB_Share_Synology_Media/', size: 'SMB3 • 16 TB', type: 'folder', stream: 'SmbServiceModule Share', audio: 'ZiloreRemoteStreamProxy', icon: 'server' },
            { name: 'Oppenheimer.2160p.DV.HDR10.mkv', size: '64.1 GB', type: 'video', stream: 'RemoteProxy HTTP Range Seek', audio: 'Dolby Audio + DLNA Cast', icon: 'film' },
            { name: 'Server_Inventory_2026.xlsx', size: '920 KB', type: 'office', stream: 'Remote SFTP Spreadsheet', audio: 'SpreadsheetParser', icon: 'file-spreadsheet' },
            { name: 'sshd_config', size: '3.2 KB', type: 'code', stream: 'SshInteractivePtyModal', audio: 'StrictHostKeyChecking', icon: 'file-cog' }
        ]
    },
    cloud_hub: {
        path: 'cloud://NetworkRemoteFileBrowser/mounted_clouds/',
        substatus: 'GDrive • Dropbox • YandexDisk • MailRuCloud • NextCloud',
        files: [
            { name: 'GoogleDrive://Work_Documents/Contract.docx', size: '1.1 MB', type: 'office', stream: 'GoogleDriveServiceModule', audio: 'OfficeDocumentParser', icon: 'cloud' },
            { name: 'Dropbox://Design_Assets/UI_Mockup_4K.png', size: '14.8 MB', type: 'image', stream: 'DropboxServiceModule', audio: 'ImageViewerScreen (Zoom/EXIF)', icon: 'image' },
            { name: 'YandexDisk://Media_4K/Interstellar_AV1.mkv', size: '29.4 GB', type: 'video', stream: 'YandexDisk + StreamProxy', audio: 'AV1 Direct Decode', icon: 'film' },
            { name: 'NextCloud://Backups/Keys_Archive.zvault', size: '64.0 MB', type: 'vault', stream: 'NextCloudServiceModule', audio: 'ZiloreCryptoVault', icon: 'shield' },
            { name: 'MailRuCloud://Music_HiRes/Pink_Floyd.flac', size: '192 MB', type: 'video', stream: 'MailRuCloudServiceModule', audio: 'ZiloreAudioEngine 24/192', icon: 'music' }
        ]
    },
    archive_view: {
        path: 'archive://Samsung_T7/Cyberpunk_OST_HiRes.7z/',
        substatus: 'ArchiveManager (zip4j • junrar • 7-Zip • TAR) In-Place',
        files: [
            { name: '01_Spoiler_HiRes_24bit_192kHz.flac', size: '184 MB', type: 'video', stream: 'FLAC Lossless 24-bit', audio: 'AudioPlayerScreen', icon: 'music' },
            { name: 'Tracklist_Notes.pdf', size: '4.2 MB', type: 'office', stream: 'In-Archive PDF Preview', audio: 'PdfViewerScreen', icon: 'file-text' },
            { name: 'binary_manifest.bin', size: '16.0 KB', type: 'hex', stream: 'BinaryHeaderInspector', audio: 'HexBinaryViewerScreen', icon: 'binary' }
        ]
    }
};

export function getQuickToolConfig(tool, targetName) {
    const configs = {
        player: { t: 'VideoPlayer & ZiloreAudioEngine • AV1 / Dolby Vision / Hi-Res', c: `Прямое аппаратное декодирование «${targetName}» через ZiloreCodecRegistry и ZiloreByteBufferPool.` },
        office: { t: 'Office & Document Suite • Word / Excel / PDF', c: `Нативный парсинг документа «${targetName}» модулями OfficeDocumentParser и SpreadsheetParser (:core:fs-engine).` },
        imageviewer: { t: 'ImageViewerScreen & ZiloreWebThumbnailRenderer', c: `Аппаратный просмотр графики «${targetName}» с плавным зумом и потоковой генерацией превью.` },
        hex: { t: 'HexBinaryViewerScreen & BinaryHeaderInspector', c: `Побайтовый HEX/ASCII анализ файла «${targetName}».` },
        hwinspector: { t: 'ZiloreCpuAndHardwareInspector & ZiloreSecurityAuditor', c: 'Аппаратная диагностика SoC/DMA и аудит безопасности (Hardware Keystore TEE, SELinux, Zip-Slip Guard).' }
    };
    return configs[tool] || configs.player;
}
