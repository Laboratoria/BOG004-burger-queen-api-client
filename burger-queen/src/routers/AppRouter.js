
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AdminScreen } from '../components/admin/AdminScreen';
import { ChefScreen } from '../components/chef/ChefScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { Navbar } from '../components/ui/Navbar';
import { WaiterScreen } from '../components/waiter/WaiterScreen';
 export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/waiter' element={<WaiterScreen />} />
        <Route path='/chef' element={<ChefScreen />} />
        <Route path='/admin' element={<AdminScreen />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
