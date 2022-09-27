import { React, useState} from 'react'
import Tile from './Tile';

export default function Column(props) {
    const [title, setTitle] = useState('')
    let qArr = JSON.parse(props.points)
    console.log(props.questions)
    const flexStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
    const titleStyle = {
        // justifyContent: 'space-evenly',
        textAlign: 'center',
        wordWrap: 'word-break',
        border: '1px solid black',
        height: '100px',
        width: '100px',
        fontSize: 'large',
        textAlign: 'center'
    }

    const columnStyle = {
        display: 'table-footer-group'
    }

    // const styles = {
    //     // display: 'inline-block',
    //     // textAlign: 'center'
    // }
    // console.log(qArr)
    const questions = qArr.map((qs) => 
    <li style={{listStyle: 'none'}}>{<Tile value = {qs}/>}</li>
    )
    return (
        <div style = {flexStyle}>
            <div style = {titleStyle}>
                {props.title}
            </div>
            <div>
                <ul style = {columnStyle}>{questions}</ul>
            </div>
        </div>
    )
}