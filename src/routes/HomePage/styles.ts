
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Intro = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 32pt;
    line-height: 36pt;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
