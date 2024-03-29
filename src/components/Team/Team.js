import React from 'react'
import AddYourself from './AddYourself'
import data from '../../../data'

import PropTypes from 'prop-types'




export const Team = (props) => {

  const {
    className,
    team,
    ...otherProps
  } = props

 

  const renderListItem = (item, i) => {

    return (

         <>
      
         <div className={'team__person'}>
          <div className={'team__photo'}>
             <img  src={item.photo} alt="cto"></img>
          </div>
           
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
   

    {team.list.map((item, i) => {
      return renderListItem(item, i)
    })}
       <AddYourself {...data}></AddYourself>

  </>
  )
}

Team.propTypes = {
  className: PropTypes.string
}

export default Team