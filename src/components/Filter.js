import React from "react";

function Filter({comments, filterFun}) {
    return (
        <div>
                <label htmlFor="filter">Filter Name   </label>
                <select name='filter' onChange={e => filterFun(e.target.value)}>
                <option></option>
                   {comments.map((comment) => <option key={comment.id}>{comment.user}</option>)}
                </select>
        </div>
    )
}


export default Filter 