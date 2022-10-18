import { ConfirmModal, QuickAccessTab, Router, Spinner, staticClasses } from 'decky-frontend-lib';
import { FC, useState } from 'react';

interface PluginInstallModalProps {
  artifact: string;
  version: string;
  hash: string;
  // reinstall: boolean;
  onOK(): void;
  onCancel(): void;
  closeModal?(): void;
}

const PluginInstallModal: FC<PluginInstallModalProps> = ({ artifact, version, hash, onOK, onCancel, closeModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <ConfirmModal
      bOKDisabled={loading}
      closeModal={closeModal}
      onOK={async () => {
        setLoading(true);
        await onOK();
        setTimeout(() => Router.OpenQuickAccessMenu(QuickAccessTab.Decky), 250);
        setTimeout(() => window.DeckyPluginLoader.checkPluginUpdates(), 1000);
      }}
      onCancel={async () => {
        await onCancel();
      }}
    >
      <div className={staticClasses.Title} style={{ flexDirection: 'column' }}>
        {hash == 'False' ? <h3 style={{ color: 'red' }}>!!!! 此文件無 hash 驗證 !!!!</h3> : null}
        <div style={{ flexDirection: 'row' }}>
          {loading && <Spinner style={{ width: '20px' }} />} {loading ? '正在安裝' : '要安裝'} {artifact}
          {version ? ' 版本 ' + version : null}
          {!loading && '？'}
        </div>
      </div>
    </ConfirmModal>
  );
};

export default PluginInstallModal;
