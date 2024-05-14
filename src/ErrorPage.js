import React from 'react'
import errorImg from "./images/error img.avif"

const ErrorPage = () => {
  return (
    <div className='container p-5 text-center'>
        <img src={errorImg} alt=''/>
    </div>
  )
}

export default ErrorPage