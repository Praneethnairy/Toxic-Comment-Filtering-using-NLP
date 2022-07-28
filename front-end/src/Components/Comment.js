import React from 'react'
import moment from 'moment';

export default function Comment(props) {
  return (
    <div>
        <div >
                    
            <div className='innerDiv'>
                <div className='flexBox'>
                  <h3>Unknown</h3>
                  <p>{moment(props.time).fromNow()}</p>
                </div>
                <p>{props.comment}</p>
            </div>
        </div>
    </div>
  )
}
