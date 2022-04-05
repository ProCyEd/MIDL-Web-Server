import React from 'react';
import Slider from '@mui/material/Slider';

export default function BasicSlider({ content }) {
    return (
        <div>
            <h3>
                {content}
            </h3>
            <Slider/>
        </div>
    );
}
