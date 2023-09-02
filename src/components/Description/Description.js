import React from 'react'
import PropTypes from 'prop-types'

export const Description = (props) => {

  const {
    className,
    list,
    ...otherProps
  } = props

  const renderListItem = (item, i) => {
console.log(item)
    return (
    
     <>
      {/* <ul class="info"> */}
                       
                        <div key={item.id}>{'ula'}</div>
                        
                       
                    {/* </ul> */}
     </>
                   
                 
             
  
    )
  }

  return (
    <>
      {list.map((element) => {
       
           return renderListItem(element) 
        }
        )
      }

    
   
    
    </>
  )
}

Description.propTypes = {
  className: PropTypes.string
}

export default Description