import React from 'react';
import Text from '../GuiComponents/Text';
import Table from '../GuiComponents/Table';
import Switch from '../Controls/Switch';
import Slider from '../Controls/Slider';
import RadioButtonsGroup from '../Controls/Radio';
import BasicSelect from '../Controls/Selecter';


export default function Content({ contentType, content, routeData }) {

    switch(contentType) {
        case 'text':
            return <Text content={content} routeData={routeData}></Text>
        case 'table':
            return <Table content={content} routeData={routeData}></Table>
        case 'switch':
            return <Switch content={content} routeData={routeData}></Switch>
        case 'slider':
            return <Slider content={content} routeData={routeData}></Slider>
        case 'radio':
            return <RadioButtonsGroup content={content} routeData={routeData}></RadioButtonsGroup>
        case 'select':
            return <BasicSelect content={content} routeData={routeData}></BasicSelect>
        default:
            return <></>;
    }
}
