import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import useIntersection from '../CustomHooks/useIntersection';
export default function Header() {
    const [header,Headerinview] = useIntersection()

  return (
    <header className={`header ${Headerinview && 'in' }`}  ref={header} >
    <nav><ul><li>Products</li><li>Resources</li><li>Support</li></ul></nav>
    <h1>DataBest</h1>
    <nav><ul><li>Company</li><li>Pricing</li><li>Connect</li></ul></nav>
  </header>
  )
}
