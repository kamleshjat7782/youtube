import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchTerms, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerms){
      navigate(`/search/${searchTerms}`);
      setSearchTerm('');

    }
  }
  return (
    <Paper
    className='paper-search'
    component="form"
    onSubmit={handleSubmit}
    sx = {{borderRadius: 20,border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: {sm: 5}}}
    >
        <input className='search-bar' 
         value={searchTerms}
         placeholder='Search...'
         onChange={(e) =>{setSearchTerm(e.target.value)}}
         />

        <IconButton type='submit' sx={{p: '10px', color:'red'}} >
            <Search/>
        </IconButton>

    </Paper>


  )
}

export default SearchBar;