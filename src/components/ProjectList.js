import React from "react";
import ListItem from "./ProjectItem";


const ProjectList = ({projects}) => {

    const projectNodes = projects.map((project, index) => {
        return <ListItem project={project} index={index} key={index} />
      
    });

    return(
        <ul>
            {projectNodes}
        </ul>
    )
  
}
export default ProjectList;