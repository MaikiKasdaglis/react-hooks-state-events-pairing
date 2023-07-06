import React from "react";
import Button from "./Button";

function Header({data}) {

    
   
   return (
        <div className="header">
            <h1>{data.title} </h1>
            <p>{data.views} | {data.createdAt}</p>
            <section className="button"> 
                <Button votes={data.upvotes} emoji={'👍'}/>
                <Button votes={data.downvotes} emoji={'👎'}/>  
            </section>
        </div>
    )
}




export default Header