import React, { Component } from 'react';
import styled from 'styled-components'

const HomeBody = styled.div`
    p {
        font-family: 'Bitter', serif;
        margin: 10vh auto;
        padding: 1vh 4vw;
        font-size: 5vh;
        color: #555358;
        background: rgba(0,0,0,0.1);
        border-radius: 5%;
    }
`

class HomePage extends Component {
    render() {
        return (
            <HomeBody>
                <p>Weclome to Vagabond, your go-to app for seeing sites and connecting with other Travelers</p>
            </HomeBody>
        );
    }
}

export default HomePage;
