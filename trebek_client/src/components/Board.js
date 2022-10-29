import { React, useState } from 'react';
import Column from './Column';
// add second upload button for answer csv



export default function Board() {
    const styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [columnsV3, setColumnsV3] = useState('');

    const reader = new FileReader();

    let boardJSON = {
        'board': []
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
    })

    const columnsV2 = boardJSON.board.map((topic) => 
    <li key = {topic.title}style = {{float: 'left', listStyle:'none'}}>{<Column {...topic}/>}</li>
    )

    return (
        <div style={styles}>
        {!isFilePicked &&
        <div>
            <div>
            {reader.result}
            </div>
            <input type = 'file' name='file'  onChange={changeHandler} />
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