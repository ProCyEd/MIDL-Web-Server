import React, {useState} from 'react';
import Switch from '@mui/material/Switch';
import publish from '../../Network/publish'

export default function BasicSwitch({ content }) {

    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
        publish(!checked, 'IOT')
    }

    return (
        <div>
            <h3>
                {content}
            </h3>
            <Switch checked={checked} onClick={() => handleClick()}/>
        </div>
    );
}