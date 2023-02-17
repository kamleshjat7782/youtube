import React from 'react'

import { Stack } from '@mui/material'
import { categories } from '../Utils/Constants'


const Sidebar = ({seletedCategory, setSeletedCategory}) => ( 
    <Stack direction="row"
    sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%', }, flexDirection: {md: 'column'} }}
    >
        {categories.map((category) =>(  
            <button className='category-btn'
            onClick={() => setSeletedCategory(category.name)}
            style={{
              background: category.name === seletedCategory  && '#fc1503', color: 'white'
            }}
            key = {category.name}
            >
                <span
                style={{
                  color: category.name === seletedCategory ? 'white' : 'red', marginRight: '15px'
                }}
                >{category.icon}</span>
                <span
                style={{
                  opacity: category.name === seletedCategory ? '1' : '0.8'
                }}
                >{category.name}</span>
            </button>
        ))}

    </Stack>
  );

export default Sidebar;



