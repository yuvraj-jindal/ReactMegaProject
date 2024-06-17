import authService from '../../appwrite/Auth'
import {logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'

export default function LogoutBtn(){
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button 
        className='inline-bock px-6 py-2 duration-200 hover:bg-[#ffffff1a] rounded-full'
        onClick={handleLogout}> Logout </button>
    )
}