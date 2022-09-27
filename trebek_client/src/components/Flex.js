import {React} from 'react'

export default function Flex() {

    const styles = {
        display: 'flex',
        flexDirection: 'Column',
    }

    return (

        <div style = {styles}>
        <div>
            Hi
        </div>
        <div>
            Hello
        </div>
        </div>
    )
}