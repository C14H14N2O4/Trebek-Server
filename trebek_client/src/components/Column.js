import { React, useState} from 'react'
import Tile from './Tile';

export default function Column(props) {
    const [title, setTitle] = useState('')
    let qArr = JSON.parse(props.queues)
    // console.log(qArr)
    const questions = qArr.map((qs) => 
    <li style={{listStyle: 'none'}}>{<Tile value = {qs}/>}</li>
    )
    return (
        <div>
            {props.title}
            <ul>{questions}</ul>
        </div>
    )
}