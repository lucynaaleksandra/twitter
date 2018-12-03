import React from 'react'

export const FormError = ({formError}) => 
  <div className='formError'>
    {Object.keys(formError).map((fieldName, i) => {
      if(formError[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formError[fieldName]}</p>
        )        
      } else {
        return ''
      }
    })}
  </div>
