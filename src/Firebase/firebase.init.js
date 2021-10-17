import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";

const firebaseInitialization = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;

/* 
Steps for authentication
--------------------

Step 1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

Step 2: set up component
1. Create Login component
2. Create Register component 
3. Create route for login and register components.

Step 3: set auth system
1. Set up sign in method
2. set up sign out method
3. user state
4. observer set up
5. return necessary methods and states from firebase

Step 4: create auth context hook (useAuth)
1. create a auth context 
2. create context provider
3. Set context provider value
4. use Auth Provider
5. create useAuth Hook

Step 5: create private route
1. create private route
2. set private route
*/