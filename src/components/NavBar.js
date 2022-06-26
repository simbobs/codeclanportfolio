import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
text-decoration: none;
`

const NavBar = () => {

    return(
        <nav>
            <ul>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/projects">Projects</Link>
                </Li>

            </ul>
        </nav>
    )
  
}
export default NavBar;