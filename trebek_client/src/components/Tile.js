import { React, useState } from 'react'
import PopUp from './PopUp'


export default function Tile(props) {
    const [value, setValue] = useState(props.value)
    const [open, setOpen] = useState(false)
    const [answered, setAnswered] = useState(false)
    const [answer, setAnswer] = useState('');
    let clicked = false;
    const styles = {
        // border: '1px solid black',
        height: '100px',
        width: '100px',
        fontSize: 'larger'
    };
    const popUpStyles = {
        zIndex: 1,
        position: "absolute",
        width: '100vw',
        height: '100vh',
        top: '0px',
        left: '0px',
        transition: '0.5s'
        // color: 'red',
        // backgroundColor: 'black',
        // width: '100vw',
        // height: '100vh',
        // top: '0',
        // left: '0'
    }

    const handleClick = () => {
        console.log("you clicked " + props.value)
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
            <button style = {popUpStyles} onClick = {handleClose}> Hi</button>
            }
        {/* {open && !answered && 
        <div style={popUpStyles}>
            Hi
            </div>} */}
    </>
    )
}