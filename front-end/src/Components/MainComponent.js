import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Comment from './Comment';


export default function MainComponent() {
  const [comments,setComments] = useState([]);
  var [flag,setFlag] = useState(false);

  useEffect(()=>{console.log("Done")},[comments,flag]);

  const Commented = (e) =>{
    setFlag(true);
    e.preventDefault();
    const object = {
      msg : e.target.comment.value,
      time: Date.now()
    }
    axios.post('http://localhost:4001/app/postComments',object).then((res)=>{
      if(res.data.output[0] === '[1]'){alert('Your comment is toxic')}
      else{
        var x = []
        x = comments
        x.push({msg:res.data.msg,time:res.data.time})
        // x.reverse()
        console.log(x);
        setComments(x);
        
        console.log("Done");
      }
      setFlag(false);
    })
  }
  return (
    <div className="mainContainerMainClass">
            
            <div className='outerComments' >
              
              
              {flag === true ? 
                <div className = "LoadContainer" style={{"zIndex":"3"}}>
                  <div className="spinner-box">
                    <div className="pulse-container">  
                      <div className="pulse-bubble pulse-bubble-1"></div>
                      <div className="pulse-bubble pulse-bubble-2"></div>
                      <div className="pulse-bubble pulse-bubble-3"></div>
                    </div>
                  </div>
                </div>
                :
                <div style={{"zIndex":"2"}}>
                  <h2>Comments</h2>
                  {comments?comments.slice(0).reverse().map((comment,num)=>{
                    return (
                      <div key={num}>
                        {console.log(comments)}
                        <Comment  comment={comment.msg} time={comment.time} />
                      </div>
                      
                    )
                  }):<p style={{"textAlign":"center",color: "white"}}>No Comments</p>}
                </div>
              }
            </div>
            <form className='commentBoxClass' onSubmit={Commented}>
                <textarea name="comment" id="commentBox" cols="50" rows="3"></textarea>
                <button type='submit'>Post</button>
            </form>
        
    </div>
  )
}
