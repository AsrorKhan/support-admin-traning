import { Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'


function AppRoutes() {
  const { users } = useAppSelector(state => state.user)
  console.log(users)
  return (
    <Routes>

    </Routes>
  )
}

export default AppRoutes
