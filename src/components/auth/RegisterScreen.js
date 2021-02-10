import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setErrorAction,setRemoveErrorAction } from "../../actions/ui";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import validator from "validator";
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
    console.log(msgError);

    const [formValues,handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
        password2:"",
    });

    const {name,email,password,password2} = formValues;

    const handleRegister = (e)=>{
        e.preventDefault();
        console.log(name,email,password,password2);
    
        if( isFormValid() ){
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }
    };

    const isFormValid = () =>{

        if(name.trim().length === 0){
            dispatch(setErrorAction("Name is Required."))
            return false;
        } else if(!validator.isEmail(email)){
            dispatch(setErrorAction("Email is not Valid."))
            return false;
        } else if(password !== password2 | password.length <5){
            dispatch(setErrorAction("Password Should Be At Least 6 Characters And Match Each Other."))
            return false;

        }

        dispatch(setRemoveErrorAction());
        return true;
    }

    return (
        <>
       <h3 className="auth__title">Register</h3>
       
       <form onClick={handleRegister}>

     {
        msgError &&
       (
       <div className="auth__alert-error">
            {msgError}
       </div>
       )

     }          
           <input
           type="text"
           placeholder="Name"
           name="name"
           className="auth__input"
           autoComplete="off"
           value={name}
           onChange={handleInputChange}>
           
           </input>

           <input
           type="text"
           placeholder="Email"
           name="email"
           className="auth__input"
           autoComplete="off"
           value={email}
           onChange={handleInputChange}>
           
           </input>

           <input
           type="password"
           placeholder="Password"
           name="password"
           className="auth__input"
           value={password}
           onChange={handleInputChange}>
           </input>

           <input
           type="password"
           placeholder="Confirm Password"
           name="password2"
           className="auth__input"
           value={password2}
           onChange={handleInputChange}>
           </input>

           <button
           type="submit"
           className="btn btn-primary btn-block mb-5">
               Login
           </button>
           
           <Link to="/auth/login"
           className="link">

                    Already Register?
                </Link>

       </form>
       </>
    )
}

