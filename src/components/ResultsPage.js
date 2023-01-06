import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js'

import {Bar, Chart} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function ResultsPage({name, exit, error4, addComment, comment, setComment, loadComments, allComments, error5} ) {

    const sheetId = "AKfycbzbS2HZ3vdBHrAI_TB_ji7oOEBSmcNq9vbnFdetN1YZkpB2zYc7_0E-DEYOvHpTnrbj"

    const findData = () => {
        const res = 0
        for(let i = 0; i < 9; i++){
            console.log("Npo")
        }
      }
    
    
    const [chartData, setChartData] = useState({
        datasets:[],
    })

    const[chartOptions, setChartOptions] = useState({})

    const[ratings, setRatings] = useState([])

    useEffect(() => {
        let datas = []
        
        Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=findData&name=" + name).then((response) => {
            // console.log(response["data"][1])
            for(let i = 1; i <=5; i++){
                datas.push(response["data"][i])
            }  
            loadComments()
            setChartData({
                labels : ["1", "2", "3", "4", "5"],
                datasets : [
                    {
                        label : "Teacher Ratings",    
                        data  : datas,
                        borderColor : "rgb(53, 162, 235)",
                        backgroundColor : "rgba(53, 162, 235, 100)",
                    },
                ],
            })

            console.log("DATAATATATATATA")
            console.log(datas)
    
        })

        

        
        setChartOptions({
            responsive: true,
            plugins : {
                legend: {
                    position : "top"
                },
                title : {
                    display : true,
                    text : "Teacher Ratings",
                }
            }
        })
    }, [])
    

    
    return(
        <div className = 'overAdmin'>
            <div className='admin3'>

                <div className="admin3  ">
                    <h2>Ratings for <span>{name}</span></h2>
                    <Bar options= {{maintainAspectRatio: true}} data = {chartData}height="100px" width="100px"/>
                    <button onClick={exit}>Exit</button>
                </div>

                <div className='inner'>
                    <h2>Comments for <span>{name}</span></h2>
                    <h3></h3>
                    <h6>{error4}</h6>
                    <h3></h3>
                    <label htmlFor='comments'> Comments: </label>
                    <input type="text" name = "comments" id = "comments" value = {comment} onChange = {e => setComment(e.target.value)}/>
                    <h3></h3>
                    <button onClick = {() => addComment(name, document.getElementById("comments").value )}>Submit</button>
                    <h3></h3>
                    <h4>View Comments:</h4>
                    <h6>{error5}</h6>
                    <h2></h2>
                    <button onClick = {loadComments}>Reload Comments</button>
                    {/* <button onClick = {() => console.log(window.innerWidth)}>Reload Comments</button> */}
                    <h3></h3>
                    {allComments.map(comments =>{
                        return <pre>{comments}</pre> 
                    })}
                </div>
            </div>

            <div className='admin4'>

                {/* <div className="admin2  ">
                    <h2>Ratings for <span>{name}</span></h2>
                    <Bar options= {{maintainAspectRatio: true}} data = {chartData}height="100px" width="100px"/>
                    <button onClick={exit}>Exit</button>
                    <h2>Comments for <span>{name}</span></h2>
                    <h3></h3>
                    <h6>{error4}</h6>
                    <h3></h3>
                    <label htmlFor='comments'> Comments: </label>
                    <input type="text" name = "comments" id = "comments" value = {comment} onChange = {e => setComment(e.target.value)}/>
                    <h3></h3>
                    <button onClick = {() => addComment(name, document.getElementById("comments").value )}>Submit</button>
                    <h3></h3>
                    <h4>View Comments:</h4>
                    <h6>{error5}</h6>
                    <h2></h2>
                    <button onClick = {loadComments}>Reload Comments</button>
                    <h3></h3>
                    {allComments.map(comments =>{
                        return <pre>{comments}</pre> 
                    })}
                </div> */}
                
                <div className='underadmin3'>
                    <h2>Ratings for <span>{name}</span></h2>
                    <Bar options= {{maintainAspectRatio: true}} data = {chartData}height="100px" width="100px"/>
                    <button onClick={exit}>Exit</button>
                    <h3></h3>
                </div>
                
                
                <div className = "underadmin">
                    <h2>Comments for <span>{name}</span></h2>
                    <h3></h3>
                    <h6>{error4}</h6>
                    <h3></h3>
                    <label htmlFor='comments'> Comments: </label>
                    <input type="text" name = "comments" id = "comments" value = {comment} onChange = {e => setComment(e.target.value)}/>
                    <h3></h3>
                    <button onClick = {() => addComment(name, document.getElementById("comments").value )}>Submit</button>
                </div>
                
                <div className='underadmin2'>
                    <h3></h3>
                    <h4>View Comments:</h4>
                    <h6>{error5}</h6>
                    <h2></h2>
                    <button onClick = {loadComments}>Reload Comments</button>
                    <h3></h3>
                    {allComments.map(comments =>{
                        return <pre>{comments}</pre> 
                    })}
                    

                </div>
            </div>

        </div>


        
        

        
    )

}



export default ResultsPage