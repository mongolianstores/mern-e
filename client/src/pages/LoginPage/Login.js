import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { LoginWrapper } from './styles.login';
import {useDispatch, useSelector} from 'react-redux'
import { signInUser } from '../../Redux/actions/userActions/userActions';


const LoginPage = (props) => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const state = useSelector(state => state.userSignIn);


    const {error, userInfo} = state;


    const redirect = props.location.search ? props.location.search.split("=")[1]:'shipping';

   
    const dispatch = useDispatch();


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signInUser(email, password))
    };

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[userInfo, props.history,redirect])

    return (
        <LoginWrapper>
            <form onSubmit={handleSubmit}>
              
                    <h1>Sign In</h1>
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
                    <label>Email</label>
                    <input
                    type="email"
                    placeholder="Enter email"
                    onChange={e=> setEmail(e.target.value)}
                    value={email}
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
           
                <button>
                    Sign In
                </button>
            
                <div>
                    New customer? <span>
                            <Link to={`/register?redirect=${redirect}`}>
                                Create your account
                            </Link>
                    </span>
                </div>
            </form>

        </LoginWrapper>
    )
}

export default LoginPage