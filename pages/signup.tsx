import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Signup(){
  const router = useRouter()
  const { plan } = router.query
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const create = ()=>{
    const user = { id: 'u_'+Date.now(), name, email, subscription: { plan: plan || 'starter', since: new Date().toISOString() }, limitsUsed: {} }
    localStorage.setItem('pf_user', JSON.stringify(user))
    // initialize demo data if not present
    if(!localStorage.getItem('pf_prospects')){
      // other demo data already set by pages
    }
    router.push('/')
  }
  return (<div>
    <h1>Inscription</h1>
    <div className="card" style={{maxWidth:480}}>
      <div className="form-row"><input className="input" placeholder="Nom" value={name} onChange={e=>setName(e.target.value)} /></div>
      <div className="form-row"><input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
      <div style={{display:'flex',gap:8}}>
        <button className="button" onClick={create}>Créer le compte et activer le forfait {plan || 'STARTER'}</button>
        <button onClick={()=>router.push('/pricing')}>Choisir un autre forfait</button>
      </div>
      <p className="small">Remarque: le paiement est simulé. Pour la démo, le plan est appliqué immédiatement.</p>
    </div>
  </div>)
}
