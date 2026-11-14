export const OFFICIAL_APK_SHA256 = '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4';
export const OFFICIAL_VERSION = 'v27.0.0 (Build 178)';

export const leftPresets = {
    usb_ntfs: {
        path: 'rawusb://cluster/usb-scsi-01/Samsung_T7_NTFS/',
        badge: 'UsbBulkScsiEngine • RawUsbVfsUri',
        files: [
            {
                name: 'Dune.Part.Two.2160p.DV.AV1.mkv',
                size: '24.8 GB',
                type: 'video',
                stream: 'AV1 10-bit • Dolby Vision • 2h Idle-TTL',
                audio: 'FileViewerRouter → VideoPlayer',
                bridge: 'ZiloreVfsBridge.pipeStreamWithCheckpoint (Zero-Alloc 128KB Pool)'
            },
            {
                name: 'Financial_Roadmap_2026.xlsx',
                size: '1.42 MB',
                type: 'office',
                stream: 'XLSX Multi-Sheet Workbook',
                audio: 'FileViewerRouter → SpreadsheetViewer',
                bridge: 'SpreadsheetParser • Direct VFS InputStream'
            },
            {
                name: 'Architecture_Spec_v27.docx',
                size: '840 KB',
                type: 'office',
                stream: 'OpenXML Word Document',
                audio: 'FileViewerRouter → WordDocumentScreen',
                bridge: 'OfficeDocumentParser • Zero-Copy Buffer'
            },
            {
                name: 'SmartTube_Next_TV_Leanback.apks',
                size: '42.1 MB',
                type: 'package',
                stream: 'Split APK Bundle (ARM64)',
                audio: 'PackageInstallerService (Session API)',
                bridge: 'RawUsbVfsUri → PackageInstaller Stream'
            }
        ]
    },
    ext4_drive: {
        path: 'rawusb://cluster/nvme-otg-02/linux_root_ext4/',
        badge: 'UsbRawPartitionReader (EXT4)',
        files: [
            {
                name: 'libzilore_scsi_bridge.so',
                size: '612 KB',
                type: 'hex',
                stream: 'ELF 64-bit LSB Shared Object',
                audio: 'FileViewerRouter → HexBinaryViewerScreen',
                bridge: 'BinaryHeaderInspector (Magic Bytes + ELF Header)'
            },
            {
                name: 'System_Manual_4K_TV.pdf',
                size: '12.6 MB',
                type: 'office',
                stream: 'PDF 1.7 Vector Document',
                audio: 'FileViewerRouter → PdfViewerScreen',
                bridge: 'ZiloreByteBufferPool (64x 128KB Direct DMA)'
            },
            {
                name: 'Backup_Partition_Image.7z',
                size: '4.18 GB',
                type: 'archive',
                stream: 'LZMA2 Solid Archive (In-Place)',
                audio: 'ArchiveViewerModal → ArchiveManager',
                bridge: 'Zip-Slip Guard + Streaming Extraction'
            }
        ]
    },
    internal: {
        path: 'vault://storage/emulated/0/ZiloreVault/',
        badge: 'BiometricGuard + CryptoVault',
        files: [
            {
                name: 'Private_Keys_Backup.zvault',
                size: '128 MB',
                type: 'vault',
                stream: 'AES-256-GCM Hardware-Backed Vault',
                audio: 'ZiloreBiometricAndClipboardGuard',
                bridge: 'ZiloreCryptoVault + KeyStoreHelper (Auto-Clear Clipboard)'
            },
            {
                name: 'ZiloreFiles-universal.apk',
                size: '28.4 MB',
                type: 'package',
                stream: 'APK Signature v3 Verified (Build 178)',
                audio: 'GithubUpdater + ZiloreSecurityAuditor',
                bridge: 'SHA-256 Checksum & Signature Verification'
            }
        ]
    }
};

export const rightPresets = {
    sftp_nas: {
        path: 'sftp://root:***@192.168.1.100:22/mnt/nas_vault/',
        substatus: 'SftpServiceModule (redactUriCredentials) • SMBv3 • StreamProxy',
        files: [
            {
                name: 'SMB_Share_Synology_Media/',
                size: 'SMB3 • 16 TB',
                type: 'folder',
                stream: 'SmbServiceModule Share',
                audio: 'ZiloreRemoteStreamProxy (VfsScheme.STREAM_PROXY)',
                bridge: 'ZiloreVfsBridge.bridgeRemoteToRemote'
            },
            {
                name: 'Oppenheimer.2160p.DV.HDR10.mkv',
                size: '64.1 GB',
                type: 'video',
                stream: 'Cinema Stream Hardened (2h Idle-TTL + writeChunkSafe)',
                audio: 'Dolby Audio + ZiloreDlnaCastServer',
                bridge: 'HTTP 206 Partial Content • Broken-Pipe Guard'
            },
            {
                name: 'router_syslog_audit.log',
                size: '3.8 MB',
                type: 'code',
                stream: 'SSH Interactive PTY + SFTP Channel',
                audio: 'FileViewerRouter → TextEditorScreen',
                bridge: 'SshInteractivePtyModal + SftpServerMonitorCard'
            }
        ]
    },
    cloud_hub: {
        path: 'cloud://ZiloreVfsBridge/mounted_clouds/',
        substatus: 'GDrive • Dropbox • YandexDisk • MailRuCloud • NextCloud (Zero-Alloc I/O)',
        files: [
            {
                name: 'GoogleDrive://Work_Documents/Contract_2026.docx',
                size: '1.1 MB',
                type: 'office',
                stream: 'GoogleDriveServiceModule (pipeBoundedHttpStream)',
                audio: 'OfficeDocumentParser → WordDocumentScreen',
                bridge: 'ZiloreVfsBridge.pipeStreamWithCheckpoint'
            },
            {
                name: 'Dropbox://Design_Assets/UI_Mockup_4K.png',
                size: '14.8 MB',
                type: 'image',
                stream: 'DropboxServiceModule (ISO-8601 server_modified)',
                audio: 'ImageViewerScreen (Zoom / EXIF Inspector)',
                bridge: 'pipeBoundedHttpStream + FileOperationTaskQueue'
            },
            {
                name: 'YandexDisk://Media_4K/Interstellar_AV1.mkv',
                size: '29.4 GB',
                type: 'video',
                stream: 'YandexDiskServiceModule + StreamProxy (2h Idle-TTL)',
                audio: 'VideoPlayer (AV1 Hardware CodecRegistry)',
                bridge: 'VfsScheme.STREAM_PROXY → ExoPlayer Range Seek'
            },
            {
                name: 'NextCloud://Backups/Keys_Archive.zvault',
                size: '64.0 MB',
                type: 'vault',
                stream: 'NextCloudServiceModule + WebDavServiceModule',
                audio: 'ZiloreCryptoVault + BiometricGuard',
                bridge: 'bridgeRemoteToRemote (Zero-Allocation 128KB Pool)'
            }
        ]
    }
};
