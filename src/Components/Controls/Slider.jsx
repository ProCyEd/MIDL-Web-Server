import React, {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import publish from '../../Network/publish';

export default function BasicSlider({ content, routeData }) {

    const [value, setValue] = useState(50);
    const [tracker, setTracker] = useState(value);
    
    const handleChange = async (event, val) => {
        setValue(val);
        if(tracker >= value + 5 || tracker <= value - 5) {
            setTracker(val);
            await publish({type: 'slider', value: value, route: routeData})
        }
    }

    return (
        <div>
            <h3>
                {content}
            </h3>
            <Slider value={value} onChange={handleChange}/>
        </div>
    );
}
