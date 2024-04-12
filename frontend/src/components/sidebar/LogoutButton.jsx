import { BiLogOut } from 'react-icons/bi';
import useLogOut from '../../hooks/useLogOut';
const LogoutButton = () => {

  const { loading, logout } = useLogOut();
  return (
    <div className="mt-auto">
      {
        !loading ?
          (
            <BiLogOut className='w-6 h-6 cursor-pointer' color='black' onClick={logout} />
          ) : (
            <span className='loading loading-spinner'></span>
          )
      }
          
      
    </div>
  )
}

export default LogoutButton
