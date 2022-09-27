import { React } from 'react'

export default function PopUp(props) {
    const popUpStyles = {
        zIndex: 1,
        position: "fixed",
        width: '100%',
        height: '100%'
    }
    return (
        <div style = {popUpStyles}>
            {props.value}
        </div>
    )
}