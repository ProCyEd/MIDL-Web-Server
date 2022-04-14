import React, {useState} from 'react';
import Switch from '@mui/material/Switch';
import publish from '../../Network/publish'

export default function BasicSwitch({ content, routeData }) {

    const [checked, setChecked] = useState(false);

    const handleClick = async () => {
        setChecked(!checked);
        const res = await publish({type: 'switch', status: !checked, route: routeData})
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