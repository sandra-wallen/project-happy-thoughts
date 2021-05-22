import React from 'react'

const NameInput = ({ userName, setUserName }) => {

  const handleNewName = (event) => {
    setUserName(event.target.value)
  }

  return (
    <>
      <label 
        className="name-input-label" 
        htmlFor="name"
      >
        Name
      </label>
      <input 
        id="name" 
        className="name-input" 
        type="text" 
        value={userName} 
        onChange={handleNewName}
      />
    </> 
  )
}

export default NameInput