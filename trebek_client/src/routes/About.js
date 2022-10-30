import React from 'react'
import Board from '../components/Board'
import exampleCSVIMG from './exampleCSV.jpg'
import { Link } from "react-router-dom"
export default function About() {
    return (
        <div>
            About
            <div>
                <ul>

                <li> On a screen that is visible to all players, the host/moderator will set up a board by following the link to Upload from the home page </li> <br/>
                <li> The moderator can build a board by uploading a CSV file. Each column in the CSV should include the title in the first row, and five questions in the subsequent rows. Please avoid the use of commas! <br/>
                In the example image below, you'll be able to see two of six columns from a well formated csv.</li> <br/>
                <li> To play a game, you'll need at least three participants: two or more players and a moderator. The players can sign up by going to the register page from the main menu and adding a name for themselves. </li> <br/>
                <li> On their own device, the moderator should follow the link to the moderator page, where they will be able to view a live feed of all currently connected players. </li> <br/>
                <li> Once everyone is connected, the first player (youngest person in the room) will choose a category and a point value. The moderator will click on the corresponding panel on the game board, revealing the question. </li> <br/>
                <li> Once the moderator has read the question aloud, they'll click the "start" button, which will allow players to buzz in. Each players screen will turn green when ready. </li> <br/>
                <li> The moderator will see the first player to buzz in, and that player will be allowed to state their answer to the question/their question to the answer.</li>  <br/>
                <li> Points will be kept by hand. If the player's guess is incorrect, the moderator can restart the round by hitting "reset", and then "start". 
                Otherwise, click on the panel again to hide the question, and then continue by pressing "reset".</li> <br/>
                </ul>
            </div>
            <img src={exampleCSVIMG} alt = "Example image of CSV"/>
            <br/>
        </div>
    )
}

