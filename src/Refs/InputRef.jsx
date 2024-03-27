import React from 'react'

const InputRef = React.forwardRef(
    (props,ref)=>{
        return (
            <>
            <input type="text" name="" id="" onBlur={props.onBlur} ref={ref} />
            </>
          )
    }
        
      
)

export default InputRef