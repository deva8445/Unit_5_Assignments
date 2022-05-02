
import styled from "styled-components"

const Button=styled.button`
background: ${props=>props.children==="Primary" ? "#6AF2F0":"white"};
color:${props =>props.children ==="Primary" ? "white": props.children==="Link Button"?"#6AF2F0":"black"};
padding:5px 20px;
margin:10px;
border-style:${props=>props.children==="Dashed"?"dashed":"solid"};
border-color: ${props=>props.children==="Link Button"||props.children==="Text Button" ? "white":"#6AF2F0"};
textDecoration: 'none';
`
export {Button}