import styled from 'styled-components';

export const header = styled.div`
    width:19rem;
    height:1.8rem;
    margin:0.1rem;
`;

export const colleft = styled.div`
    float: left;
    width: 25%;
    color:white;
`;

export const colright = styled.div`
    float: right;
    width: 25%;
    text-align: right;
`;

export const colmiddle = styled.div`
    display: inline-block;
    text-align:center;
    width: 50%;
    color:white;
`;

export const pokecontainer = styled.div`
    background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
    width:19.5rem;
    height:23rem;
    margin:0.5rem;
    padding:0.5rem;
    border-radius:10px;
`;

export const pokebackground = styled.div`
    text-align:center;
    height:19.5rem;
    background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const pokebackgroundback = styled.div`
    height:19.5rem;
    background: linear-gradient(to right, ${props => props.color1}, ${props => props.color2});
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const pokeimage = styled.img`
    margin-top:3rem;
    width:13rem;
    height:13rem;
`;

export const pokestats = styled.div`
    letter-spacing: 1px;
    padding:1rem;
`;

