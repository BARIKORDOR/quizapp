
import axios from "axios";
import { useRef } from "react";
import { Link} from "react-router-dom";
export default function Signup(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const {setUser,setToken} = useStateContext()


    const onSubmit = (ev) =>{
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation : passwordConfirmationRef.current.value,
        }
        axiosClient.post('/signup',payload)
        .then(({data})=>{
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err =>{
            const response = err.response;
            if(response && response.status == 422 )
            {
               console.log(response.data.errors);
            }
        })
    }
    return (
        <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <form onSubmit={onSubmit}>
                <h1 className="title">Signup for free </h1>              
                <input ref={nameRef}  placeholder="Full name" autoComplete="username" />
                <input ref={emailRef}  placeholder="Email"  autoComplete="email" />
                <input ref={passwordRef} type="password" placeholder="Password"  autoComplete="new-password"/>
                <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation" autoComplete="confirm-password"/>
                <button className="btn btn-block">Signup</button>
                <p className="message">
                    Already Registered? <Link to ="/login"> Sign in </Link> 
                </p>
            </form>
        </div>
        </div>
    )
}