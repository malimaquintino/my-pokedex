import styled from 'styled-components';

export const pokecontainer = styled.div`
    background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
    width:350px;
    height:auto;
    margin:10%;
    padding: 10px;
    border-radius:10px;
`;

export const pokebackground = styled.div`
    text-align:center;
    background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;

export const pokeimage = styled.img`
    width:200px;
    height:200px;
`;

export const pokename = styled.h1`
    text-align:center;
    font-size:19px;
    font-weight:lighter;
    padding:10px;
`;

export const poketype = styled.span`
    background-color:black;
    color:white;
    padding:10px;
    border-radius:5px;
    width:90px;
    text-align:center;
    margin:7px;
`;

export const pokecontent = styled.div`
    background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
	padding:10px;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
`;

export const pokestats = styled.div`
    letter-spacing: 1px;
`;
