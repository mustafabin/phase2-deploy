import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [comments, setComments] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/comments")
        .then(res => res.json())
        .then(data => setComments(data));
  },[])
  console.log(comments)
  return (
    <div className="App">
        <h1>Comments</h1>
        {comments.map((comment,i)=><p key={i}>{comment.body}</p>)}
    </div>
  )
}

export default App
