import React from 'react'
import Nav from './Nav'

export default function Layout({children, user}:{children:React.ReactNode,user:any}){
  return (<div>
    <div className="container">
      <Nav user={user} />
      <main style={{marginTop:12}}>{children}</main>
      <div className="footer">ProspectFlow — Prototype local. Interface en français. Mobile-first.</div>
    </div>
  </div>)
}
