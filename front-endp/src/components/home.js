import React from 'react'
import MainButton from './MainButton.js'
import Calendar from './calendar'
import DropDownTasks from './DropDownTasks'

const Home = (props) => {
    return(
        <div class="container">
           
            <Calendar clickDate={props.clickDate}/>
            <MainButton/>
            <DropDownTasks options={props.options}/>
        </div>
    )
}

export default Home