import { React, useState} from 'react'
import Tile from './Tile';

export default function Column(props) {
    const [title, setTitle] = useState('')
    let qArr = JSON.parse(props.questions)
    let pArr = JSON.parse(props.points)
    let questionsAndPoints = {
        questions: props.questions,
        points: props.points
    }
    let qAndPArr = []
    
    for (let i =0; i<qArr.length; i++) {
        qAndPArr[i] = {question: qArr[i], point: pArr[i]}
    }

    console.log(qAndPArr)
    // console.log("questions and points from Column " + questionsAndPoints.questions + questionsAndPoints.points)
    const flexStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
    const titleStyle = {
        textAlign: 'center',
        wordWrap: 'word-break',
        border: '1px solid black',
        height: '150px',
        width: '150px',
        fontSize: 'large',
        textAlign: 'center'
    }

    const columnStyle = {
        display: 'table-footer-group'
    }

    const questions = qAndPArr.map((qAndP) => 
    <li key = {qAndP.point} style={{listStyle: 'none'}}>{<Tile {...qAndP}/>}</li>
    )
    
    return (
        <div style = {flexStyle}>
            <div style = {titleStyle}>
                <div style = {{paddingTop: '60px'}}>
                    {props.title}
                </div>
            </div>
            <div>
                <ul style = {columnStyle}>{questions}</ul>
            </div>
        </div>
    )
}