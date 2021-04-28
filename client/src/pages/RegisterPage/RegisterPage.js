import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { RegisterWrapper } from './styles.register';
import { registerUser } from '../../Redux/actions/userActions/userActions';

const RegisterPage = (props) => {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");


    const Info = useSelector(state=> state.userRegister);

    const {error, userInfo} = Info;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1]: "/";



    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword && password.length< 6 && confirmPassword.length<6){
            alert("Password and confirm password are not matched")
        }else{
        dispatch(registerUser( name,email,password));
        }
    }

useEffect(()=>{
    if(userInfo){
        props.history.push(redirect);
    }
},[props.history, redirect, userInfo]);


    return (
        <RegisterWrapper>
            <form onSubmit={handleSubmit} >
              
                    <h1>Create Account</h1>
                    <br/>
                        <div >   
                            {error?(
                             <div style={{backgroundColor:"#E93F3A", padding: "15px", margin:"1rem 0"}}>
                                <span >{error}!</span>
                            </div>
                            ):(
                                null
                            )}
                        </div>
                    <br/>

                <label>Name</label>
                 <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    required
                 />


                <label> Email</label>
                    <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    required
                    />

                <label> Password</label>
                    <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    required
                    />

            <label>Confirm Password</label>
                    <input
                    type="password"
                    placeholder="Enter password"
                    value={confirmPassword}
                    onChange={e=> setConfirmPassword(e.target.value)}
                    required
                    />
           
                <button>
                    Register
                </button>
            
                <div>
                    Already have an account? <span>
                            <Link to={`/signin?redirect=${redirect}`}>
                                Sign In
                            </Link>
                    </span>
                </div>
            </form>

        </RegisterWrapper>
    )
}

export default RegisterPage;