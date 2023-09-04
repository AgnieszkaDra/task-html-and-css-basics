import React from 'react'

import PropTypes from 'prop-types'


export const AddYourself = (props) => {

  const {
    className,
    team,
    ...otherProps
  } = props

 
 

  const renderListItem = (item, i) => {

    return (

         <>
         <div className={'team__person you'}>
            <div className={'team__photo'}><input type="file" id="fileInput" accept="image/*"></input>
            <img id="image" /></div>
        <div className={'team__function'}>{item.function}</div>
        <div className={'team__data'}>{item.data}</div>
        <div className={'team__text'}>{item.description}</div>
        <div className={'team__icons'}>
            <img className={'team__icon-twitter'} src="./images/team-twitter.svg" alt="team-twitter"></img>
            <img class={'team__icon-fb'} src="./images/team-facebook.svg" alt="team-facebook"></img>
        </div>
         </div>
        
        </>

    )
  }

  return (

    
    <>
   

    {team.addYou.map((item, i) => {
      return renderListItem(item, i)
    })}

  </>
  )
}

AddYourself.propTypes = {
  className: PropTypes.string
}

export default AddYourself