import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login(){
  const router = useRouter()
  const [email,setEmail] = useState('')
  const login = ()=>{
    const u = { id: 'u_demo', email }
    localStorage.setItem('pf_user', JSON.stringify(u))
    router.push('/')
  }
  return (<div>
    <h1>Connexion (démo)</h1>
    <div className="card" style={{maxWidth:480}}>
      <div className="form-row"><input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
      <div style={{display:'flex',gap:8}}>
        <button className="button" onClick={login}>Se connecter</button>
        <button onClick={()=>router.push('/signup')}>S'inscrire</button>
      </div>
    </div>
  </div>)
}
