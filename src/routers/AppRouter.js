import React, { useEffect, useState } from 'react';
import {firebase} from "../firebase/firebase-config";

import {
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from "../components/journal/JournalScreen";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

import { PublicRoute } from "../routers/PublicRoute";
import { PrivateRoute } from "../routers/PrivateRoute";
import { startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

  const dispatch = useDispatch();
    
    const [checking,setChecking] = useState(true);

    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
      firebase.auth().onAuthStateChanged( async (user)=>{

        if(user?.uid){
          
          dispatch(login(user.uid,user.displayName));
          setisLoggedIn(true);

          dispatch( startLoadingNotes(user.uid));
          
        }else{
          setisLoggedIn(false);
        }

        setChecking(false);

      });

    }, [ dispatch, setChecking, setisLoggedIn ])

    if(checking){
      return (
        <h1>Wait...</h1>
      )
    }
  return (
        
        <Router>
        <div>
        
        <Switch>

           <PublicRoute 
           path="/auth" 
           component={AuthRouter}
           isAuthenticated={isLoggedIn}
           >

           </PublicRoute>

           <PrivateRoute
           exact path="/" 
           component={JournalScreen}
           isAuthenticated={isLoggedIn}
           >

           </PrivateRoute>

           <Redirect to="/auth/login" /> 
        
        </Switch>
        
        </div>
        </Router>
       
    )
}
