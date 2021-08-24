import react, {useState} from 'react';
import {Auth} from "aws-amplify"
import { useHistory } from 'react-router';
import logo from '../images/expertdoclogo.svg';

const RegisterAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const history = useHistory();

    function onFirstNameChange(event){
        setFirstName(event.target.value)
    }

    function onLastNameChange(event){
        setLastName(event.target.value)
    }

    function onEmailChange(event){
        setEmail(event.target.value)
    }

    function onPasswordChange(event){
        setPassword(event.target.value)
    }
    
    function onGenderChange(event){
        setGender(event.target.value)
    }

    function onDOBChange(event){
        setDob(event.target.value)
    }

    function onPhoneNumberChange(event){
        setPhoneNumber(event.target.value)
    }

    async function onSignUp(){
        const userData = await Auth.signUp({
            username : firstName + lastName,
            password : password,
            attributes: {
                email,
            }
           

        }).then(
            history.push('/signin')
        ).catch((err) => console.log("err",err))
    }
    return(
        <>
        <div className = "py-24">
                <img src = {logo} alt = "expert doc logo" className = "m-auto"></img>
                <h1 className = "text-black pt-12 pb-4 font-semibold tracking-normal">Sign Up</h1>
                <div className = "h-full">
                <div className = "flex flex-row">
                    <input type = "text" placeholder = "Enter First Name" value = {firstName} onChange = {onFirstNameChange} className = "text-black  rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-100 my-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                    <input type = "text" placeholder = "Enter Last Name" value = {lastName} onChange = {onLastNameChange} className = "text-black rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-100 my-2 ml-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                </div>
            <div className = "flex flex-col">
                <input type = "email" placeholder = "Enter Email" value = {email} onChange = {onEmailChange} className = "text-black rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-full my-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                <input type = "tel" placeholder = "Enter Phone" value = {phoneNumber} onChange = {onPhoneNumberChange} className = "text-black rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-full my-2 px-5  h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                <input type = "password" placeholder = "Enter Password" value = {password} onChange = {onPasswordChange} className = "text-black rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-full my-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                <input type = "date" placeholder = "Enter DOB" value = {dob} onChange = {onDOBChange} className = "text-black rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-full my-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                <input type = "text" placeholder = "Enter Gender" value = {gender} onChange = {onGenderChange} className = "text-black rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-full my-2 px-5 h-12 text-base  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></input>
                <input type = "submit" onClick = {onSignUp} className = "bg-blue-400 text-white  rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-full h-12 my-5 text-base"></input>
                <a href="" onClick = {() => history.push("/signin")} className="text-black">Already have an account? Sign In</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default RegisterAccount;