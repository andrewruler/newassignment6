import {useUserContext} from '../contexts/UserContext'

function SettingsView() {

    const { userData, updateUser } = useUserContext();
  return (
      <div>
        <form>
            <h1>{userData.firstName}</h1>
            <input placeholder='Change your First Name'></input>
            <h1>{userData.lastName}</h1>
            <input placeholder='Change your Last Name'></input>
            <h1>{userData.email}</h1>
            <input placeholder='Change your Email'></input>
        </form>
    </div>
  )
}

export default SettingsView
