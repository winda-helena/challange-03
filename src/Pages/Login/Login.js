import React, { useState } from 'react'
import './Login.css'
import gambar1 from '../../Assets/img/Rectangle 62.png'


const PindahHalamanS =()=>{
    window.location.href="/Dashboard"
}

export const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    
    return (
        <div className='container-login'>
            <div className='gambar-1'>
                {/* <img src={gambar1} alt='' className='gbr-1'/> */}
            </div>

            <div className='field-login'>
                <img src={gambar1} alt='' className='property-login' />
                <h2 className='property-login Title'>Welcome, Admin BCR</h2>
                

                <label className='property-login email-pass'>Email</label>
                <input type='email' placeholder='Contoh: johndee@gmail.com' className='input-field property-login'></input>

                <label className='property-login email-pass'>Password</label>
                <input type='password' placeholder='6+ karakter' className='input-field property-login'></input>

                <button className='btn-login' onClick={PindahHalamanS}>Login</button>
            </div>
        </div>
    )
}

