
import React, {useState, useEffect} from 'react';
import ProjectList from '../components/ProjectList';

const ProjectContainer = () => {

    const [projects, setProjects] = useState([
        {name: 'project1', info:"this project blabla"},
        {name:'project2', info:"this is the javascript project"},
        {name:'project3', info:"this is the java project"}
    ])



 

    return(
        <>

       <h1> PROJECTS</h1>
        <ProjectList projects={projects} />

        </>
        
    )
}
export default ProjectContainer;