import React from 'react'

import PropTypes from 'prop-types'


export const Team = (props) => {

  const {
    className,
    team,
    ...otherProps
  } = props


  const renderInfo = (item) => {
    return (

     
   
      <ul>
        {item.map(el =>
    <li key={el.id}>
    {el}</li>)}
      </ul>

      
    )
    
  }

  const renderListItem = (item, i) => {

    return (

         <>
         <div className={'team__person'}>
            <img className={'team__photo'} src="./images/cto.png" alt="cto"></img>
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
    {'djsdj'}
    {team.list.map((item, i) => {
      return renderListItem(item, i)
    })}

  </>
  )
}

Team.propTypes = {
  className: PropTypes.string
}

export default Team