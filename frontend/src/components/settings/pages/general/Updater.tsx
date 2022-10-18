import {
  Carousel,
  DialogButton,
  Field,
  FocusRing,
  Focusable,
  ProgressBarWithInfo,
  Spinner,
  showModal,
} from 'decky-frontend-lib';
import { useCallback } from 'react';
import { Suspense, lazy } from 'react';
import { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

import { VerInfo, callUpdaterMethod, finishUpdate } from '../../../../updater';
import { useDeckyState } from '../../../DeckyState';
import InlinePatchNotes from '../../../patchnotes/InlinePatchNotes';
import WithSuspense from '../../../WithSuspense';

const MarkdownRenderer = lazy(() => import('../../../Markdown'));

function PatchNotesModal({ versionInfo, closeModal }: { versionInfo: VerInfo | null; closeModal?: () => {} }) {
  return (
    <Focusable onCancelButton={closeModal}>
      <FocusRing>
        <Carousel
          fnItemRenderer={(id: number) => (
            <Focusable
              style={{
                marginTop: '40px',
                height: 'calc( 100% - 40px )',
                overflowY: 'scroll',
                display: 'flex',
                justifyContent: 'center',
                margin: '40px',
              }}
            >
              <div>
                <h1>{versionInfo?.all?.[id]?.name}</h1>
                {versionInfo?.all?.[id]?.body ? (
                  <WithSuspense>
                    <MarkdownRenderer onDismiss={closeModal}>{versionInfo.all[id].body}</MarkdownRenderer>
                  </WithSuspense>
                ) : (
                  '這個版本沒有補丁說明'
                )}
              </div>
            </Focusable>
          )}
          fnGetId={(id) => id}
          nNumItems={versionInfo?.all?.length}
          nHeight={window.innerHeight - 40}
          nItemHeight={window.innerHeight - 40}
          nItemMarginX={0}
          initialColumn={0}
          autoFocus={true}
          fnGetColumnWidth={() => window.innerWidth}
        />
      </FocusRing>
    </Focusable>
  );
}

export default function UpdaterSettings() {
  const { isLoaderUpdating, setIsLoaderUpdating, versionInfo, setVersionInfo } = useDeckyState();

  const [checkingForUpdates, setCheckingForUpdates] = useState<boolean>(false);
  const [updateProgress, setUpdateProgress] = useState<number>(-1);
  const [reloading, setReloading] = useState<boolean>(false);

  useEffect(() => {
    window.DeckyUpdater = {
      updateProgress: (i) => {
        setUpdateProgress(i);
        setIsLoaderUpdating(true);
      },
      finish: async () => {
        setUpdateProgress(0);
        setReloading(true);
        await finishUpdate();
      },
    };
  }, []);

  const showPatchNotes = useCallback(() => {
    showModal(<PatchNotesModal versionInfo={versionInfo} />);
  }, [versionInfo]);

  return (
    <>
      <Field
        onOptionsActionDescription={versionInfo?.all ? 'Patch Notes' : undefined}
        onOptionsButton={versionInfo?.all ? showPatchNotes : undefined}
        label="更新"
        description={
          versionInfo && (
            <span style={{ whiteSpace: 'pre-line' }}>{`目前版本：${versionInfo.current}\n${
              versionInfo.updatable ? `最新版本：${versionInfo.remote?.tag_name}` : ''
            }`}</span>
          )
        }
        icon={
          !versionInfo ? (
            <Spinner style={{ width: '1em', height: 20, display: 'block' }} />
          ) : (
            <FaArrowDown style={{ display: 'block' }} />
          )
        }
      >
        {updateProgress == -1 && !isLoaderUpdating ? (
          <DialogButton
            disabled={!versionInfo?.updatable || checkingForUpdates}
            onClick={
              !versionInfo?.remote || versionInfo?.remote?.tag_name == versionInfo?.current
                ? async () => {
                    setCheckingForUpdates(true);
                    const res = (await callUpdaterMethod('check_for_updates')) as { result: VerInfo };
                    setVersionInfo(res.result);
                    setCheckingForUpdates(false);
                  }
                : async () => {
                    setUpdateProgress(0);
                    callUpdaterMethod('do_update');
                  }
            }
          >
            {checkingForUpdates
              ? '正在檢查'
              : !versionInfo?.remote || versionInfo?.remote?.tag_name == versionInfo?.current
              ? '檢查更新'
              : '安裝更新'}
          </DialogButton>
        ) : (
          <ProgressBarWithInfo
            layout="inline"
            bottomSeparator="none"
            nProgress={updateProgress}
            indeterminate={reloading}
            sOperationText={reloading ? '正在重新載入' : '正在更新'}
          />
        )}
      </Field>
      {versionInfo?.remote && (
        <InlinePatchNotes
          title={versionInfo?.remote.name}
          date={new Intl.RelativeTimeFormat('en-US', {
            numeric: 'auto',
          }).format(
            Math.ceil((new Date(versionInfo.remote.published_at).getTime() - new Date().getTime()) / 86400000),
            'day',
          )}
          onClick={showPatchNotes}
        >
          <Suspense fallback={<Spinner style={{ width: '24', height: '24' }} />}>
            <MarkdownRenderer>{versionInfo?.remote.body}</MarkdownRenderer>
          </Suspense>
        </InlinePatchNotes>
      )}
    </>
  );
}
