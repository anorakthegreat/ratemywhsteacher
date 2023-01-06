import './App.css';
import FirstPage from './components/FirstPage';
import React, {useState} from 'react'
import TeacherPoll from './components/TeacherPoll';
import ViewResultsPage from './components/ViewResultsPage';
import ResultsPage from './components/ResultsPage';
import { PieChart, Pie, Sector, Cell} from "recharts"
import Axios from 'axios'
import LandingPage from './components/LandingPage';
import TestPage from './components/TestPage';

function App() {
  const[name, setName] = useState("");
  const[voted, setVoted] = useState("");
  const[error, setError] = useState("");
  const[view, setView] = useState(false);
  var[next, setNext] = useState("");
  var[level, setLevel] = useState(0);
  const[error2, setError2] = useState("");
  const[error3, setError3] = useState("");
  const [teacher, setTeacher] = useState("")
  const [subj, setSubj] = useState("")
  const [error4, setError4] = useState("")
  const [comment, setComment] = useState("")
  const [allComments, setAllComments] = useState([])
  const [error5, setError5] = useState("")

  // const[oneData, setOneData] = useState(getData(1, name))
  // const[twoData, setTwoData] = useState(getData(2, name))
  // const[threeData, setThreeData] = useState(getData(3, name))
  // const[fourData, setFourData] = useState(getData(4, name))
  // const[fiveData, setFiveData] = useState(getData(5, name))

  const sheetId = "AKfycbzbS2HZ3vdBHrAI_TB_ji7oOEBSmcNq9vbnFdetN1YZkpB2zYc7_0E-DEYOvHpTnrbj"

   

  const addComment = (nom, comm) => {
    setError4("Loading...")
    Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=addComments&teacher=" + nom + "&comments="+ comm).then((response) => {
      setError4("Succesful")
    })

    setTimeout(function(){
      setComment("")
      setError4("")
    }.bind(this),3000);

    console.log("Ple")
  }
  const addData = nom =>{
    setError("Loading....")
    Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=addData&name=" + name + "&num=" + nom).then((response) => {
      setError("Succesfull!")
      setVoted("true")
      setLevel(2)
      setError("")
    })
    

  }

  const loadComments = () => {
    let newArr= []
    let x = "" 
    setError5("Loading...")
    Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=returnComments&teacher=" + name).then((response) => {
      
      for(var i = 0; i < response["data"].length; i++){
        newArr = newArr.concat(response["data"][i]);
      }

      for(var i = 0; i < newArr.length; i++){
        x = i + 1
        x = String(x)
        newArr[i] = x + ". " + newArr[i]
      }
      setAllComments(newArr)
      setError5("Succesful")
      // console.log(response["data"])
    })

    // newArr[i].replace(/"|'/g, '')

    setTimeout(function(){
      setError5("")
    }.bind(this),2500);  
    
    
  }
  
  const viewTheRatings = name => {
    setError2("Loading....")
    
    Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=namePresent&name=" + name).then((response) => {
      if(response["data"] == true){
        setName(name)
        setLevel(3)
      } else {
        setError2("Teacher not Found")
      }
    }) 
  }

  const suggestTeacher = (name, subject) => {
    setError3("Loading....")
    Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=suggestTeacher&name=" + name + "&subject=" + subject).then((response) => {
      setError3("Succesful!")
    }) 

    // setSubj("")
    // setTeacher("")

    setTimeout(function(){
      setSubj("")
      setTeacher("")
    }.bind(this),2000);  // wait 5 seconds, then reset to false

    setTimeout(function(){
      setError3("")
    }.bind(this),3000);  // wait 5 seconds, then reset to false
  }
  const addNextPage = num => {
    // setLevel(1)
    // setName(num)
    // console.log("NO")
      // console.log({next})
    setError("Loading")
    Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=namePresent&name=" + num).then((response) => {
      if(response["data"] == true){
        setLevel(1)
        setName(num)
        setError("")
      } else {
        setError("Teacher not Found")
      }
    })

  }

  const viewed = () => {
    setLevel(3)
    setError("")
  }

  const getData = (name, num) => {
    const res = 0
    Axios.get("https://script.google.com/macros/s/" + sheetId + "/exec?type=findData&name=" + name).then((response) => {
      // console.log( typeof(response["data"][num]) )
      // return response["data"][num]
      console.log("No")


    })

  }

  const exit = () => {
    setLevel(0)
    setName("")
    setError("")
    setError2("")
  }

  const renderSwitch = () =>{

    // if(level == 0){
    //   return <FirstPage name = {name} setName = {setName} addNextPage = {addNextPage} next = {next} error = {error} viewTheRatings = {viewTheRatings} error2 = {error2} error3 = {error3} suggestTeacher = {suggestTeacher} teacher = {teacher} setTeacher = {setTeacher} subj = {subj} setSubj = {setSubj}/>
    // } else if (level == 1){
    //   return <TeacherPoll name = {name} addData = {addData} error = {error} getData = {getData}/>
    // } else if (level == 2){
    //   return <ViewResultsPage name = {name} error={error} viewed={viewed}/>
    // } else if (level == 3){
      return <ResultsPage name = {name} exit = {exit} error4 = {error4} addComment = {addComment} comment = {comment} setComment = {setComment} loadComments = {loadComments} allComments = {allComments} error5 = {error5}/>
    // }
    


    
  }

  

  return (
    <div className= "App">

      {renderSwitch()}
    </div>
  );
}

export default App;
