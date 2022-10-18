import { Field, Focusable, TextField, Toggle } from 'decky-frontend-lib';
import { useRef } from 'react';
import { FaReact, FaSteamSymbol } from 'react-icons/fa';

import { setShouldConnectToReactDevTools, setShowValveInternal } from '../../../../developer';
import { useSetting } from '../../../../utils/hooks/useSetting';

export default function DeveloperSettings() {
  const [enableValveInternal, setEnableValveInternal] = useSetting<boolean>('developer.valve_internal', false);
  const [reactDevtoolsEnabled, setReactDevtoolsEnabled] = useSetting<boolean>('developer.rdt.enabled', false);
  const [reactDevtoolsIP, setReactDevtoolsIP] = useSetting<string>('developer.rdt.ip', '');
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Field
        label="啟用 Valve 內建"
        description={
          <span style={{ whiteSpace: 'pre-line' }}>
            啟用 Valve 內建開發人員選單。{' '}
            <span style={{ color: 'red' }}>除非你知道它的作用，否則不要碰這個選單中的任何東西。</span>
          </span>
        }
        icon={<FaSteamSymbol style={{ display: 'block' }} />}
      >
        <Toggle
          value={enableValveInternal}
          onChange={(toggleValue) => {
            setEnableValveInternal(toggleValue);
            setShowValveInternal(toggleValue);
          }}
        />
      </Field>{' '}
      <Focusable
        onTouchEnd={
          reactDevtoolsIP == ''
            ? () => {
                (textRef.current?.childNodes[0] as HTMLInputElement)?.focus();
              }
            : undefined
        }
        onClick={
          reactDevtoolsIP == ''
            ? () => {
                (textRef.current?.childNodes[0] as HTMLInputElement)?.focus();
              }
            : undefined
        }
        onOKButton={
          reactDevtoolsIP == ''
            ? () => {
                (textRef.current?.childNodes[0] as HTMLInputElement)?.focus();
              }
            : undefined
        }
      >
        <Field
          label="啟用 React DevTools"
          description={
            <>
              <span style={{ whiteSpace: 'pre-line' }}>
                啟用與執行 React DevTools 的電腦的連接。改變這個設定將重新載入 Steam。啟用前必須設定 IP 位址。
              </span>
              <div ref={textRef}>
                <TextField label={'IP'} value={reactDevtoolsIP} onChange={(e) => setReactDevtoolsIP(e?.target.value)} />
              </div>
            </>
          }
          icon={<FaReact style={{ display: 'block' }} />}
        >
          <Toggle
            value={reactDevtoolsEnabled}
            disabled={reactDevtoolsIP == ''}
            onChange={(toggleValue) => {
              setReactDevtoolsEnabled(toggleValue);
              setShouldConnectToReactDevTools(toggleValue);
            }}
          />
        </Field>
      </Focusable>
    </>
  );
}
