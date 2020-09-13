import React, { Component } from 'react'
import Header from './components/Header'
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    background-color: #0c0f12;
`;


class HomePage extends Component {
    public render() {
        return (
            <Wrapper>
               <Header></Header> 
            </Wrapper>
        )
    }
}

export default HomePage;
