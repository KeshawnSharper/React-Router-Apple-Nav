import React from "react"
import { Link } from 'react-router-dom'


export function NavWrapper(props){
    const {products} = props
   
    return(
      <>
      {products.map(i => <Link to={`/${i}`} key = {i}>{i} </Link>)}
      </>
    )
}