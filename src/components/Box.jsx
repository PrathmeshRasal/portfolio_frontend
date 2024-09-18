import { useState } from "react"
import './Home.css'


function Box(props) {

    // console.log("props:",props.skill)
    return (

        <div className="skills-box">
                <label className="">{props.skill}</label>
        </div>

    )
}

export default Box