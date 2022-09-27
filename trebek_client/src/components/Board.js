import { React, useState } from 'react';
import Column from './Column';



export default function Board() {
    const titles = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6']
    const styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space evenly'
    }

    const questionJSON = {
        "questions": [
            {"title": "S words", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
            {"title": "Champagne Problems", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
            {"title": "Be a deer", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
            {"title": "ROCKS!", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
            {"title": "Space", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
            {"title": "Pop culture", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
        ]
    }

let qArr = questionJSON.questions;

const columns = qArr.map((qs) => 
    <div>
        <li style={{float: 'left', listStyle:'none'}}>{<Column title={qs.title} queues = {qs.qs} points = {qs.points}/>}</li>
    </div>
)

    console.log(qArr)
    return (
        <div style={styles}>
        <ul>{columns}</ul>
        </div>
    );
}

//https://reactjs.org/docs/lists-and-keys.html