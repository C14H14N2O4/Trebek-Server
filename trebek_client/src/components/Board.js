import { React, useState } from 'react';
import Column from './Column';



export default function Board() {
    const titles = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6']

    const questionJSON = {
        "questions": [
            {"title": "a", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]'},
            {"title": "b", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]'},
            {"title": "c", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]'},
            {"title": "d", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]'},
            {"title": "e", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]'},
            {"title": "f", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]'},
        ]
    }

let qArr = questionJSON.questions;

const columns = qArr.map((qs) => 
    <div>
        <li style={{float: 'left', listStyle:'none'}}>{<Column title={qs.title} queues = {qs.qs}/>}</li>
    </div>
)

    console.log(qArr)
    return (
        <ul>{columns}</ul>
    );
}

//https://reactjs.org/docs/lists-and-keys.html