import { React, useState } from 'react';
import { Column } from './Column';



export default function Board() {
    const titles = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6']
    const questions = {"a": ["q1", "q2", "q3", "q4", "q5", "q6"],
                       "b": ["q1", "q2", "q3", "q4", "q5", "q6"],
                       "c": ["q1", "q2", "q3", "q4", "q5", "q6"],
                       "d": ["q1", "q2", "q3", "q4", "q5", "q6"],
                       "e": ["q1", "q2", "q3", "q4", "q5", "q6"],
                       "f": ["q1", "q2", "q3", "q4", "q5", "q6"]
}

for (let i in questions) {
    console.log(i);
}
    return (
        <div>

        </div>
    );
}

//https://reactjs.org/docs/lists-and-keys.html