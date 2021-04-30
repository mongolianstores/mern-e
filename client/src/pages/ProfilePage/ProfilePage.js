import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {detailsUser, updateUserProfile} from '../../Redux/actions/userActions/userActions';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';
import { FormWrapper } from './styles.ProfilePage';
import { USER_UPDATE_PROFILE_RESET } from '../../Redux/actions/actionConsts/userConsts';






const ProfilePage = () => {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");




    const userSignIn = useSelector(state=>state.userSignIn);
    const {userInfo} = userSignIn;

    const userDetails = useSelector(state=>state.userDetails)
    const {loading, error, user}  = userDetails;


    const userUpdateProfile = useSelector(state=> state.userUpdateProfile)

    const {success:successUpdate, error: errorUpdate, loading: loadingUpdate} = userUpdateProfile;
    
    
    const dispatch = useDispatch();



    
    useEffect(()=>{
        if(!user){
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id))
        }else{
            setName(user.name);
            setEmail(user.email)
        }
    },[dispatch, userInfo._id, user])
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Password and confirm password are not matched")
        }else{
            dispatch(updateUserProfile({userId: user._id, name, email,password}))
        }
    }

    return (
        <FormWrapper>
        <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {
                    loading? <LoadingBox/>
                    :error? <MessageBox>error</MessageBox>
                    :
                    <>{loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && <MessageBox>Error Updating User</MessageBox>}
                    {successUpdate && <MessageBox >
                        Profile Updated Successfully
                        </MessageBox>}
                            <label htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                   
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />

                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                           
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                    

                            <label htmlFor="password">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                              
                            />
                    
                            <label/>
                            <button>Update</button>
                    
                    </>
                }
        </form> 
        </FormWrapper>
    )
}

export default ProfilePage
