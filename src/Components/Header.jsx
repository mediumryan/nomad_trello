import React from 'react';
import { styled } from 'styled-components';

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: ${(props) => props.theme.primary_100};
    margin: 48px 0;
`;

export default function Header() {
    return <MainTitle>Ryan Trello</MainTitle>;
}
