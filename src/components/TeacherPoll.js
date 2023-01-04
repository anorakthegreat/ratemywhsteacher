import React, {useState} from 'react'
import Axios from 'axios'


function TeacherPoll( {name, addData, error, getData} ) {
    return (
        <div className = "admin">
            {/* <h2>{name}</h2>  */}
            <h2>Ratings for <span>{name}</span></h2>
            <h2></h2>
            {/* console.log({name}) */}
            <h3>Rate here! (scale 1 to 5) </h3>
            <h2></h2>
            { (error != "") ? (<div className=' error'><h4>{error}</h4></div> ) : "" }
            <h2></h2>
            <button onClick={() => addData(1)}>1</button>
            <span>             </span>
            <button onClick={() => addData(2)}>2</button> 
            <span>             </span>
            <button onClick={() => addData(3)} >3</button>
            <span>             </span>
            <button onClick={() => addData(4)} >4</button>
            <span>             </span>
            <button onClick={() => addData(5)} >5</button>

            {/* <h2>UOOOOOOOO</h2> */}
        </div>
    )


}

export default TeacherPoll