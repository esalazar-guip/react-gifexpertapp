import React, { useState } from 'react'
import ProTypes from 'prop-types'

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
       
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategory(c=>[inputValue,...c]);
            setInputValue('');
        }
        
    }

  return (
    <form onSubmit={handleSubmit}> 
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>

  )
}

AddCategory.ProTypes = {
    setCategory: ProTypes.func.isRequired
}