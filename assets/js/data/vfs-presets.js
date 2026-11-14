export const OFFICIAL_APK_SHA256 = '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4';

export const leftPresets = {
    usb_ntfs: {
        path: 'vfs://usb-scsi-01/Samsung_T7_NTFS/',
        badge: 'UsbBulkScsiEngine (NTFS)',
        files: [
            { name: 'Dune.Part.Two.2160p.DV.AV1.mkv', size: '24.8 GB', type: 'video', stream: 'AV1 10-bit • Dolby Vision', audio: 'FileViewerRouter → VideoPlayer' },
            { name: 'Financial_Roadmap_2026.xlsx', size: '1.42 MB', type: 'office', stream: 'XLSX Multi-Sheet Workbook', audio: 'FileViewerRouter → SpreadsheetViewer' },
            { name: 'Architecture_Spec_v26.docx', size: '840 KB', type: 'office', stream: 'OpenXML Word Document', audio: 'FileViewerRouter → WordDocument' },
            { name: 'SmartTube_Next_TV_Leanback.apks', size: '42.1 MB', type: 'package', stream: 'Split APK Bundle (ARM64)', audio: 'PackageInstallerService' }
        ]
    },
    ext4_drive: {
        path: 'vfs://nvme-otg-02/linux_root_ext4/',
        badge: 'UsbRawPartitionReader (EXT4)',
        files: [
            { name: 'libzilore_scsi_bridge.so', size: '612 KB', type: 'hex', stream: 'ELF 64-bit LSB Shared Object', audio: 'FileViewerRouter → HexBinaryViewer' },
            { name: 'System_Manual_4K_TV.pdf', size: '12.6 MB', type: 'office', stream: 'PDF 1.7 Vector Document', audio: 'FileViewerRouter → PdfViewerScreen' }
        ]
    },
    internal: {
        path: '/storage/emulated/0/ZiloreVault/',
        badge: 'BiometricGuard + CryptoVault',
        files: [
            { name: 'Private_Keys_Backup.zvault', size: '128 MB', type: 'vault', stream: 'AES-256-GCM Encrypted Vault', audio: 'ZiloreBiometricAndClipboardGuard' },
            { name: 'ZiloreFiles-universal.apk', size: '28.4 MB', type: 'package', stream: 'APK Signature v3 Verified', audio: 'GithubUpdater + SecurityAuditor' }
        ]
    }
};

export const rightPresets = {
    sftp_nas: {
        path: 'sftp://root@192.168.1.100:22/mnt/nas_vault/',
        substatus: 'SftpServiceModule (JSch + PTY) • SmbServiceModule • DLNA',
        files: [
            { name: 'SMB_Share_Synology_Media/', size: 'SMB3 • 16 TB', type: 'folder', stream: 'SmbServiceModule Share', audio: 'ZiloreRemoteStreamProxy' },
            { name: 'Oppenheimer.2160p.DV.HDR10.mkv', size: '64.1 GB', type: 'video', stream: 'RemoteProxy HTTP Range Seek', audio: 'Dolby Audio + DLNA Cast' }
        ]
    },
    cloud_hub: {
        path: 'cloud://NetworkRemoteFileBrowser/mounted_clouds/',
        substatus: 'GDrive • Dropbox • YandexDisk • MailRuCloud • NextCloud',
        files: [
            { name: 'GoogleDrive://Work_Documents/Contract.docx', size: '1.1 MB', type: 'office', stream: 'GoogleDriveServiceModule', audio: 'OfficeDocumentParser' },
            { name: 'Dropbox://Design_Assets/UI_Mockup_4K.png', size: '14.8 MB', type: 'image', stream: 'DropboxServiceModule', audio: 'ImageViewerScreen (Zoom/EXIF)' },
            { name: 'YandexDisk://Media_4K/Interstellar_AV1.mkv', size: '29.4 GB', type: 'video', stream: 'YandexDisk + StreamProxy', audio: 'AV1 Direct Decode' },
            { name: 'NextCloud://Backups/Keys_Archive.zvault', size: '64.0 MB', type: 'vault', stream: 'NextCloudServiceModule', audio: 'ZiloreCryptoVault + BiometricGuard' }
        ]
    }
};
