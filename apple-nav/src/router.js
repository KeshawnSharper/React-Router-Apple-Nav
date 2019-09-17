import React from "react"
import { Route } from 'react-router-dom';

export function Routers (props){
const { route } = props 

return (
<>
{route.map(route => <Route path={`/${route}`} component={route} />)}
</>
)



}