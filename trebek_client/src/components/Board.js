import { React, useState } from 'react';
import Column from './Column';



export default function Board() {
    const titles = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6']
    const styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }

    // const questionJSON = {
    //     "questions": [
    //         {"title": "S words", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
    //         {"title": "Champagne Problems", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
    //         {"title": "Be a deer", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
    //         {"title": "ROCKS!", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
    //         {"title": "Space", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
    //         {"title": "Pop culture", "qs": '["q1", "q2", "q3", "q4", "q5", "q6"]', "points": '["200", "400", "600", "800", "1000"]'},
    //     ]
    // }

    // let qArr = questionJSON.questions;

    // const columns = qArr.map((qs) => 
    //     <div>
    //         <li style={{float: 'left', listStyle:'none'}}>{<Column title={qs.title} queues = {qs.qs} points = {qs.points}/>}</li>
    //     </div>
    // )

    const boardJSON = {
        'board': [
            {'title': 'Space', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'Famous Quotes', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'A really, really long title', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'Women in Science', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'O Canada', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': '???', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' }
        ]
    }
    
    let boardObj = boardJSON.board

    let questionsAndPoints

    const columnsV2 = boardJSON.board.map((topic) => 
    <li key = {topic.title}style = {{float: 'left', listStyle:'none'}}>{<Column {...topic}/>}</li>
    )

    // {...questionsAndPoints = {title: topic.title, questions: topic.questions, points: topic.points}}



    return (
        <div style={styles}>
        <ul>{columnsV2}</ul>
        </div>
    );
}

//https://reactjs.org/docs/lists-and-keys.html