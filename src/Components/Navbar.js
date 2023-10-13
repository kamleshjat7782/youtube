import { Stack } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
// import { logo } from '../Utils/Constants';
import SearchBar from './SearchBar';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <>
      <Stack 
        direction="row" 
        alignItems="center"
        p={2} 
        sx={{ position: 'sticky', background: '#000', top: '0', }} 
        >
          <Link to='/youtube' className='logo'>
            <img src={logo} alt='logo' style={{padding: '0 10px 0 0'}} />
          </Link>
          <SearchBar/>
      </Stack>
    </>
  )
}

export default Navbar;