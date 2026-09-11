import React from 'react'
import Link from 'next/link'

export default function Nav({user}:{user:any}){
  return (<div className="nav header">
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <strong>ProspectFlow</strong>
      <nav style={{display:'flex',gap:8}}>
        <Link href="/">Tableau de bord</Link>
        <Link href="/prospects">Prospects</Link>
        <Link href="/pipeline">Pipeline</Link>
        <Link href="/assistant">Assistant IA</Link>
        <Link href="/pricing">Tarifs</Link>
      </nav>
    </div>
    <div style={{display:'flex',gap:8,alignItems:'center'}}>
      {user ? <Link href="/account">{user.email}</Link> : <Link href="/login">Connexion</Link>}
    </div>
  </div>)
}
