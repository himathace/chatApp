import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import { useState } from "react";
import {createUserWithEmailAndPassword,} from "firebase/auth"
import { signInWithPopup } from "firebase/auth";
import { auth,googleProvider } from "../firebase/fire";
import { useNavigate } from "react-router-dom";



function Register(){

    const[email,updateemail]=useState("");
    const[Password,updatepassword]=useState("");
    const[reenterpassword,updarereenterpassword]=useState("");

    const navigate=useNavigate()


    const hadleregister=()=>{
        if(Password==reenterpassword){
            createUserWithEmailAndPassword(auth,email,Password)
            .then(()=>{
                alert("account created")
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
        else{
            alert("password not match")
        }
    }


    const googlesignin=()=>{
        signInWithPopup(auth,googleProvider)
        .then(()=>{
            navigate("/dashboard")
        })
        .catch((error)=>{
            alert(error.message)
        })
        
    }


    return(
        <div className="flex min-h-screen justify-center items-center bg-[#f5f5f5]">
            <div className=" w-fit rounded-xl p-7 bg-white shadow-xl">
                <div className="text-center text-2xl  mb-2 font-medium">Create account</div>
                <div className="text-slate-500 mb-12 text-center text-sm">Please enter your details to sign up</div>
                <div className="mb-6">
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'300px'}} inputProps={{sx:{height:17}}} onChange={(event)=>{
                        updateemail(event.target.value)
                    }} />
                </div>
                <div className="mb-6">
                    <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width:'300px'}}  inputProps={{sx:{height:17}}} onChange={(event)=>{
                        updatepassword(event.target.value)
                    }} />
                </div>
                <div className="mb-4">
                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" sx={{width:'300px'}} inputProps={{sx:{height:17}}} onChange={(event)=>{
                        updarereenterpassword(event.target.value)
                    }} />
                </div>
                <div className="text-left  mb-4">
                    <label className="text-xs text-slate-500"><input type="checkbox"></input>&nbsp;&nbsp; By creating an account, you agree to <span className="text-[#3b82f6]">our Terms of</span> <br></br><span className="text-[#3b82f6]">Service</span>  and <span className="text-[#3b82f6]">Privacy Policy.</span></label>
                </div>
                <div className="mb-4">
                    <Button variant="contained" sx={{width: '100%',height: '48px',backgroundColor: '#3b82f6',borderRadius: '0.5rem',color: '#fff',fontWeight: 500,fontSize: '1rem',textTransform: 'none','&:hover': {backgroundColor: '#2563eb',},}} onClick={hadleregister} >Create account</Button>
                </div>
                <div className="mb-4">
                    <Divider>or</Divider>
                </div>
                <div className="mb-6">
                    <button className="w-full flex justify-center items-center border h-12 rounded-lg gap-x-3" onClick={googlesignin}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        <div className="font-medium text-sm">
                            Sign up with Google
                        </div>
                    </button>
                </div>
                <div className="text-center text-sm text-gray-500">
                    Already have an account?  <span className="text-[#3b82f6]"><a href="/login">Sign in</a></span>
                </div>
            </div>
        </div>
    )
}

export default Register