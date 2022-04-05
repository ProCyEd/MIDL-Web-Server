import React from 'react';


export default function Content({ contentType, content }){

    const Text = () => {
        return(
            <div>
                {content}
            </div>
        )
    }

    if(contentType === 'text'){
        return <Text></Text>
    } else {
        return <></>
    }
}
