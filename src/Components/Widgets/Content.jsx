import React from 'react';
import Text from '../GuiComponents/Text';
import Table from '../GuiComponents/Table';
import Switch from '../Controls/Switch';
import Slider from '../Controls/Slider';
import RadioButtonsGroup from '../Controls/Radio';
import BasicSelect from '../Controls/Selecter';


export default function Content({ contentType, content }){

    if(contentType === 'text'){
        return <Text content={content}></Text>
    } else if(contentType === 'table'){
        return <Table content={content}></Table>
    } else if(contentType === 'switch'){
        return <Switch content={content}></Switch>
    } else if(contentType === 'slider'){
        return <Slider content={content}></Slider>
    } else if(contentType === 'radio'){
        return <RadioButtonsGroup content={content}></RadioButtonsGroup>
    } else if(contentType === 'select'){
        return <BasicSelect content={content}></BasicSelect>
    } else {
        return <></>
    }
}
