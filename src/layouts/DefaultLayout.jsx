import { Outlet } from 'react-router-dom';
import Nav from './Navbar';

export default function DefaultLayout() {
  return (
    <div>
      <Nav />
      <Outlet /> 
    </div>
  );
}
