import {doGoogleLoginAction,logOutAction} from '../../../store/slices/userDuck'
import { connect } from 'react-redux';




function LoginButton(){


    function doLogin(){
        console.log("DIANNA");
        doGoogleLoginAction()
        
    }

    function logOut(){
        logOutAction()
    }

    return <button onClick={doLogin}>Hola pol la cola</button>
}


function mapState({user}){
    return {
        user
    }
}

export default connect(mapState,{doGoogleLoginAction,logOutAction})(LoginButton);