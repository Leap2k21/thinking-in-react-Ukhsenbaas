import React from 'react'
// import {FormGroup, FormControlLabel, Checkbox} from 'react'

export const SearchBar = () => {
    return <div className='SearchBar'>
        <input className="searchbtn" type="text" placeholder='Search...' />
        <p><input type="checkbox" />{' '}
        Only show product in stock</p>

    </div>
}