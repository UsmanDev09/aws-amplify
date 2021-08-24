import { Auth } from 'aws-amplify';
import react from 'react';
import { useHistory } from 'react-router';
const Profile = () => {
    const history = useHistory();

    async function onLogOut(){
        await Auth.signOut().then(() => history.push("/signup"));
    }


    return (
        <input type = "submit" value = "Log Out" onClick = {onLogOut} className = "bg-blue-400 text-white  rounded-xl border border-black border-opacity-40 placeholder-gray-400 placeholder-opacity-75 w-48 h-12 my-5 text-base"></input>
    )
}

export default Profile;