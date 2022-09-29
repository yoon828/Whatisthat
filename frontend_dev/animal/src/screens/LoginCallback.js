import Lottie from 'lottie-react'
import success from './../lotties/success.json'
import './LoginCallback.css'
import { useEffect, useState } from 'react'

const LoginCallback = () => {
    const params = new URLSearchParams(window.location.search)
    let accessToken = params.get("accessToken")
    let refreshToken = params.get("refreshToken")
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    return (
        <div id='login-lottie'>
            <Lottie animationData={success} style={{'width':'200px', 'marginBottom':'40px'}}></Lottie>
            <h1 style={{'fontFamily':'Kotra', 'fontSize':'80px'}}>로그인 성공!!</h1>
        </div>
    )
}

export default LoginCallback;