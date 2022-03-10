import React from 'react';
import { useEffect, useState } from 'react'

const [data, setdata] = useState([])

    useEffect(async() => {
        const result = await fetch('http://localhost:3001/nav-info', {
            method: 'GET',
            credantials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await result.json()
        setdata(res)  
    }, [])

    console.log(data)


export default function NavBar(){
    return (
        <div>
            <h1>This is the navbar</h1>
            <h1>This is the navbar</h1>
            <h1>This is the navbar</h1>
            <h1>This is the navbar</h1>
            <h1>This is the navbar</h1>
            <h1>This is the navbar</h1>
            {/* {data.map((t) => (
                <div>tabs</div>
            ))} */}
        </div>
    )
}