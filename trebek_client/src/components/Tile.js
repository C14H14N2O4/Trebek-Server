import { React, useState } from 'react'

export default function Tile(props) {
    const [value, setValue] = useState(0)
    const [answer, setAnswer] = useState('');
    let clicked = 0;
    return (
        <div style={{height: "50px", width: "50px", border: "5px"}}>
            {`${value}`}
        </div>
    )
}