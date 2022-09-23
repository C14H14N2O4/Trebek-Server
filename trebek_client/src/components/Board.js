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
//     const questions = {name:"a", qs:["q1", "q2", "q3", "q4", "q5", "q6"],
//     name:"b": ["q1", "q2", "q3", "q4", "q5", "q6"],
//                        "c": ["q1", "q2", "q3", "q4", "q5", "q6"],
//                        "d": ["q1", "q2", "q3", "q4", "q5", "q6"],
//                        "e": ["q1", "q2", "q3", "q4", "q5", "q6"],
//                        "f": ["q1", "q2", "q3", "q4", "q5", "q6"]
// }
    // const columns = questionJSON.questions.map((question) => 
    //     <li>{question}}</li>
    // )

// for (let i in questions) {
//     console.log(i);
// }

const columns = qArr.map((qs) => 
    <li>{<Column title={qs.title} queues = {qs.qs}/>}</li>

)

    console.log(qArr)
    return (
        <ul>{columns}</ul>
        // <>
        // Hi
        // </>
    );
}

//https://reactjs.org/docs/lists-and-keys.html