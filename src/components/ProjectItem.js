import React from 'react';


const ListItem = ({project}) => {


    return(
        <li>
            <h4>{project.name} </h4>
            <p>{project.info}</p>
        
            
        </li>
    )
  
}

export default ListItem;