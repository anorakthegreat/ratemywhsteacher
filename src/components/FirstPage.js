import React, {useState} from 'react'

function FirstPage({name, setName, addNextPage, next, level, error, viewTheRatings, error2, error3, suggestTeacher, teacher, setTeacher, subj, setSubj}) {
    
    return (
        <div className = "form-inner">
            <h2>Rate/Comment Your Teacher:</h2>
            {/* <div className=' error'><h4>{error}</h4></div>  */}
            <div className='form-group'>
                { (error != "") ? (<div className=' error'><h5>{error}</h5></div> ) : "" }  
                <label htmlFor='teacher'> Teacher Name: </label>
                <input type="text" name = "teacher" id = "teacher"/>
            </div>
            <button onClick={() => addNextPage(document.getElementById("teacher").value)} >Search</button>
            <h2></h2>
            <h2>View The Ratings/Comments:</h2>
            {/* <div className=' error'><h4>{error}</h4></div>  */}
            <div className='form-group'>
                { (error2 != "") ? (<div className=' error2'><h5>{error2}</h5></div> ) : "" }

                <label htmlFor='teachername'> Teacher Name: </label>
                <input type="text" name = "teachername" id = "teachername"/>
            </div>
            <button onClick={() => viewTheRatings(document.getElementById("teachername").value)} >View</button>
            <h2></h2>
            <h2>Suggest a Teacher:</h2>
            {/* <div className=' error'><h4>{error}</h4></div>  */}
            <div className='form-group'>
                { (error3 != "") ? (<div className=' error3'><h5>{error3}</h5></div> ) : "" }

                <label htmlFor='suggestteacher'> Teacher Name: </label>
                <input type="text" name = "suggestteacher" id = "suggestteacher" value = {teacher} onChange = {e => setTeacher(e.target.value)}/>

               
            </div>

            <div className='form-group'>
                {/* { (error3 != "") ? (<div className=' error3'><h5>{error3}</h5></div> ) : "" } */}

                <label htmlFor='class'> Teacher Class: </label>
                <input type="text" name = "class" id = "class" value = {subj} onChange = {e => setSubj(e.target.value)}/>

               
            </div>

            
            <button onClick={() => suggestTeacher( document.getElementById("suggestteacher").value , document.getElementById("class").value ) } >View</button>
            
            

            <h2></h2>

            <h2></h2>


        </div>
    )


}

export default FirstPage