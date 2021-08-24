import react, {useState} from 'react';
import {Auth} from 'aws-amplify';
import { useHistory } from 'react-router';

const SignIn = () => {
    const [username, setUserName] = useState('');
    const [code, setCode] = useState('');
    const history = useHistory();

    function onUserNameChange(event){
        setUserName(event.target.value)
    } 

    function onCodeChange(event){
        setCode(event.target.value)
    }

    async function onSignUp(){
        const userData = await Auth.signIn(username,code)
        .then(
            console.log("confirmed"),
            history.push('./profile')
        ).catch((err) =>console.log(err))
    }
    return(
        <>
        <div className = "py-24">
            <input type = "text" placeholder = "Enter Username" value = {username} onChange = {onUserNameChange} className = "text-black  rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-100 my-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
            <input type = "text" placeholder = "Enter Password" value = {code} onChange = {onCodeChange} className = "text-black rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-100 my-2 ml-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
            <input type = "submit" value = "Sign In" onClick = {onSignUp} className = "bg-blue-400 text-white  rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-full h-12 my-5 text-base"></input>
        </div>
        </>
    )
}

export default SignIn;