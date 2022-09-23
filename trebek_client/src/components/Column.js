import { React, useState} from 'react'
import Tile from './Tile';

export default function Column(props) {
    const [title, setTitle] = useState('')
    return (
        <div>
            {props.title}
            {props.queues}
        </div>
    )
}