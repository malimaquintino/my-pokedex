import styled from 'styled-components';

export const poketype = styled.span`
    background-color:${props => props.bgcolor};
    color:${props => props.fontcolor};
    padding:4px;
    border-radius:5px;
    text-align:center;
    margin:1px;
`;