import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [comments, setComments] = useState([])
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/mustafabin/phase2-deploy/main/src/db.json")
        .then(res => res.json())
        .then(data =>{
          // different endpoints as keys of json
          setComments(data.comments)
        });
  },[])

  return (
    <div className="App">
        <h1>Comments</h1>
        {comments.map((comment,i)=><p key={i}>{comment.body}</p>)}
    </div>
  )
}

export default App
