import { Stack } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../Utils/Constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
      <Stack 
        direction="row" 
        alignItems="center"
        p={2} 
        sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between' }} 
        >
          <Link to="/" className='logo'>
            <img src={logo} alt='logo' />
          </Link>
          <SearchBar/>
      </Stack>
    </>
  )
}

export default Navbar;