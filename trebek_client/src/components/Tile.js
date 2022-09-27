import { React, useState } from 'react'
import PopUp from './PopUp'


export default function Tile(props) {
    const [value, setValue] = useState(props.point)
    const [open, setOpen] = useState(false)
    const [answered, setAnswered] = useState(false)
    const [answer, setAnswer] = useState('');
    let clicked = false;

    const styles = {
        height: '150px',
        width: '150px',
        fontSize: 'larger'
    };
    const popUpStyles = {
        zIndex: 1,
        position: "absolute",
        width: '100vw',
        height: '100vh',
        top: '0px',
        left: '0px',
        transition: '0.5s',
        fontSize: 'Larger'
    }

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setAnswered(true)
        setValue('')
    }

    return (
    <>
        <button style={styles} onClick ={handleClick}>
            {value}
        </button>

        {open && !answered &&
            <button style = {popUpStyles} onClick = {handleClose}> {props.question}</button>
            }
    </>
    )
}