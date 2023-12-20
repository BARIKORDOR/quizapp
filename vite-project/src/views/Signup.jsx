
import { useRef } from "react";
import { Link} from "react-router-dom";
export default function Signup(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const onSubmit = (ev) =>{
        console.log("JH");
        ev.prevenDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation : passwordConfirmationRef.current.value,
        }
        
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