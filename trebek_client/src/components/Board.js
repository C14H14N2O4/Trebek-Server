import { React, useState } from 'react';
import { stringify } from 'uuid';
import Column from './Column';



export default function Board() {
    const titles = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6']
    const styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [columnsV3, setColumnsV3] = useState('');
    const [importBoard, setImportBoard] = useState([]);

    const reader = new FileReader();

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

    const oldBoardJSON = {
        'board': [
            {'title': 'Space', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'Famous Quotes', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'A really, really long title', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'Women in Science', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': 'O Canada', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' },
            {'title': '???', 'questions': '["q1", "q2", "q3", "q4", "q5"]', 'points': '["200","400","600","800","1000"]' }
        ]
    }

    let boardJSON = {
        'board': []
    }

    const boardJSONEmpty = {
        'board': [
            {'title': '', 'questions': '[]', 'points': '[]'},
            {'title': '', 'questions': '[]', 'points': '[]'},
            {'title': '', 'questions': '[]', 'points': '[]'},
            {'title': '', 'questions': '[]', 'points': '[]'},
            {'title': '', 'questions': '[]', 'points': '[]'},
            {'title': '', 'questions': '[]', 'points': '[]'}
        ]
    }

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        reader.readAsText(event.target.files[0])
        setIsFilePicked(true);
    }

    const handleSubmission = () => {
        console.log(selectedFile);
    };

    var boardArr = []

    reader.addEventListener('load', () => {
        var arr = reader.result.split("\r\n")
        var qArr = []
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i].split(",")
            qArr.push(temp)
        }

        for (let j = 0; j < 6; j++) {
            let temp = []
            qArr.forEach(element => {
                temp.push(element[j])
            });
            boardArr.push(temp)
        }


        boardArr.forEach(element => {
            let qArrString = JSON.stringify(element.slice(1,7))
            let prep = JSON.stringify(qArrString)
            console.log(prep)
            let temp = {'title': element[0], 'questions': qArrString, 'points': '["200","400","600","800","1000"]'}
            boardJSON.board.push(temp);
        })

        setColumnsV3(boardJSON.board.map((topic) => 
        <li key = {topic.title}style = {{float: 'left', listStyle:'none'}}>{<Column {...topic}/>}</li>
        ))
        setIsFilePicked(true)
        
        // setImportBoard(JSON.stringify(reader.result))
    })

    let boardObj = boardJSONEmpty.board

    let questionsAndPoints

    const columnsV2 = boardJSON.board.map((topic) => 
    <li key = {topic.title}style = {{float: 'left', listStyle:'none'}}>{<Column {...topic}/>}</li>
    )

    

    // {...questionsAndPoints = {title: topic.title, questions: topic.questions, points: topic.points}}

    //accept="application/vnd.ms/excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    return (
        <div style={styles}>
        {!isFilePicked &&
        <div>
            <div>
            {reader.result}
            </div>
            <input type = 'file' name='file'  onChange={changeHandler} />
            {/* <button onClick={handleSubmission}>submit</button> */}
        </div>
            }            
        {isFilePicked &&
            <>
                <ul>{columnsV3}</ul>
            </>
        }
        </div>
    );
}

//https://reactjs.org/docs/lists-and-keys.html