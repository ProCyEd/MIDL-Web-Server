import React from 'react';
import Switch from '@mui/material/Switch';

export default function BasicSwitch({ content }) {
    return (
        <div>
            <h3>
                {content}
            </h3>
            <Switch/>
        </div>
    );
}