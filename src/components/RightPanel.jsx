import React from 'react';
import Dropdown from './Dropdown';
import Input from "./Input";
import Text from "./Text";
import Button from './Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function RightPanel() {
  return (
    <div className='rightPanel'>

      <div className="button-flex">
        <Dropdown class="btn btn-secondary dropdown-toggle drop" name="Avalanche" />
        <Dropdown class="btn btn-outline-primary dropdown-toggle drop1" name="0XF6...1353" />
      </div>

      <Text class="custom-link-p" icon={<ArrowBackIcon style={{fontSize :13 }} />} text="Custom Link" />
      <Text class="custom-link-p" text="https://testnet.xyzxyz/trade?ref=" />

      <Input class="input w-100" type="text" placeholder="ENTER" />

      <div className="button-flex">
        <Button className="btn btn-primary linkButton " name="Custom Link" />
        <Button className="btn btn-dark cancelButton " name="Cancel" />
      </div>

    </div>
  )
}

export default RightPanel;