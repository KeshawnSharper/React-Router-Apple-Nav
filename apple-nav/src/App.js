import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Routers } from "./router"
import { NavWrapper } from "./navWrapper"
import { Mac } from "./Mac"
import { Iphone } from "./Iphone"
import { Ipad } from "./Ipad"
import { TV } from "./TV"
import { Music } from "./Music"
import { Support } from "./Support"
import { Route } from 'react-router-dom';
import styled from 'styled-components';


let products = ["Mac",
"Iphone",
"Ipad",
"Watch",
"TV",
"Music",
"Support"]

const blackDiv = styled.div`
text-align:center;
background-color:black;
display:inline-flex;
margin-left:15rem;
`;

export function App() {
  
  return (
  <blackDiv className="black">
    <NavWrapper products={products} />
    <Route path={`/Iphone`} component={Iphone} />
    <Route path={`/Mac`} component={Mac} />
    <Route path={`/Ipad`} component={Ipad} />
    <Route path={`/TV`} component={TV} />
    <Route path={`/Music`} component={Music} />
    <Route path={`/Support`} component={Support} />




  </blackDiv>
  );
}

export default App;
