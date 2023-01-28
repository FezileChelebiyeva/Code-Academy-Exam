import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./index.scss"
const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div id='error'>
      <div className="container">
        <div className="error">
            <h1>Page Not Found</h1>
            <div className="btn">
                <button onClick={() => navigate("/")}>Go Home</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
