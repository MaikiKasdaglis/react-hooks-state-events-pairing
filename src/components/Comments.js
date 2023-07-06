import React, {useState} from "react";
import Button from "./Button";
import Filter from "./Filter.js";

function Comments({comments}) {
const [display, setDisplay] = useState(true)
const [commentsActual, setCommentsActual] = useState([...comments])
const [filterValue, setFilterValue] = useState('')

function removeComment(e){
    let newArray = commentsActual
    .filter((user) => user.id !== e )

    setCommentsActual(newArray)
}

function filterFun(value) {
    setFilterValue(value)
}

let displayComments = []
filterValue ? displayComments = commentsActual.filter((comment) => comment.user === filterValue) : displayComments = commentsActual

console.log(`commentsActual`, displayComments)

return (
    <div className="comments-containter">
        <div >
        <button onClick={e => setDisplay(!display)}>{display ? "Hide Comments" : "Show Comments"}</button>
      { display ? <Filter comments={commentsActual} filterFun={filterFun}/> : null  }
        </div>
     {display ? displayComments.map((comment) => {
     return <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        <Button  emoji={'👍'} votes={0}/>
        <Button  emoji={'👎'} votes={0}/>
        <button onClick={e => removeComment(comment.id)}>❌</button>
        </div>}) : null}  
    </div>
   
)
}


export default Comments