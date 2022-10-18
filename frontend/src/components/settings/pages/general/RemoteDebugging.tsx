import { Field, Toggle } from 'decky-frontend-lib';
import { FaBug } from 'react-icons/fa';

import { useSetting } from '../../../../utils/hooks/useSetting';

export default function RemoteDebuggingSettings() {
  const [allowRemoteDebugging, setAllowRemoteDebugging] = useSetting<boolean>('cef_forward', false);

  return (
    <Field
      label="允許 CEF 遠端偵錯"
      description={
        <span style={{ whiteSpace: 'pre-line' }}>
          允許你的網路中的任何人未經認證地存取 CEF 偵錯器
        </span>
      }
      icon={<FaBug style={{ display: 'block' }} />}
    >
      <Toggle
        value={allowRemoteDebugging || false}
        onChange={(toggleValue) => {
          setAllowRemoteDebugging(toggleValue);
          if (toggleValue) window.DeckyPluginLoader.callServerMethod('allow_remote_debugging');
          else window.DeckyPluginLoader.callServerMethod('disallow_remote_debugging');
        }}
      />
    </Field>
  );
}
