import styled from 'styled-components';

export const poketype = styled.span`
    background-color:${props => props.bgcolor};
    color:${props => props.fontcolor};
    padding:0.1rem;
    border-radius:1px;    
    margin:0.1rem;
    display: inline-block;
    width:3.7rem;
    text-align:center;
    font-size: small;
`;
