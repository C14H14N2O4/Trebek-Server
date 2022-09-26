import { React, useState } from 'react'

export default function Tile(props) {
    const [value, setValue] = useState(0)
    const [answer, setAnswer] = useState('');
    let clicked = false;
    const styles = {
        border: '1px solid black',
        height: '50px',
        width: '50px',
    };

    const handleClick = () => {
        console.log("you clicked " + props.value)
    }

    return (
        // <div style={styles}>
        //     {`${props.value}`}
        // </div>
        <button style={styles} onClick ={handleClick}>
        {`${props.value}`}
    </button>
    )
}