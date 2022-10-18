import { DialogButton, Field, TextField, Toggle } from 'decky-frontend-lib';
import { useState } from 'react';
import { FaShapes, FaTools } from 'react-icons/fa';

import { installFromURL } from '../../../../store';
import BranchSelect from './BranchSelect';
import RemoteDebuggingSettings from './RemoteDebugging';
import UpdaterSettings from './Updater';

export default function GeneralSettings({
  isDeveloper,
  setIsDeveloper,
}: {
  isDeveloper: boolean;
  setIsDeveloper: (val: boolean) => void;
}) {
  const [pluginURL, setPluginURL] = useState('');
  // const [checked, setChecked] = useState(false); // store these in some kind of State instead
  return (
    <div>
      {/* <Field
        label="A Toggle with an icon"
        icon={<FaShapes style={{ display: 'block' }} />}
      >
        <Toggle
          value={checked}
          onChange={(e) => setChecked(e)}
        />
      </Field> */}
      <UpdaterSettings />
      <BranchSelect />
      <RemoteDebuggingSettings />
      <Field
        label="開發人員模式"
        description={<span style={{ whiteSpace: 'pre-line' }}>啟用 Decky 的開發人員設定</span>}
        icon={<FaTools style={{ display: 'block' }} />}
      >
        <Toggle
          value={isDeveloper}
          onChange={(toggleValue) => {
            setIsDeveloper(toggleValue);
          }}
        />
      </Field>
      <Field
        label="手動安裝外掛程式"
        description={<TextField label={'網址'} value={pluginURL} onChange={(e) => setPluginURL(e?.target.value)} />}
        icon={<FaShapes style={{ display: 'block' }} />}
      >
        <DialogButton disabled={pluginURL.length == 0} onClick={() => installFromURL(pluginURL)}>
          安裝
        </DialogButton>
      </Field>
    </div>
  );
}
