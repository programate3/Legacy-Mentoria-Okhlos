import React from 'react';
import './waitmessage.css'
import {Link} from 'react-router-dom'



const WaitMessage = ({header, message}) => {

    return (
        <div> 
            <div className="container">
              <div className="back">
                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h3>{header}</h3>
                      <p>{message}</p>
                      
                    </div>
                    <Link 
                    style={{textDecoration: "none", color: "#000"}} 
                    to="/student-sessions"
                    className="button-return">
                        volver
                    </Link>              
                  </div>
                  {/* <h1 className="little">.hola.</h1> */}
                </div>
              </div>  
            </div>
        </div>
    )
}

export default WaitMessage
