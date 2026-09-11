import { useEffect, useState } from 'react'
import { DEMO_PROSPECTS } from '../lib/demoData'
import { PLANS } from '../lib/plans'

export default function Prospects(){
  const [prospects,setProspects] = useState<any[]>([])
  const [user,setUser] = useState<any>(null)

  useEffect(()=>{
    const s = localStorage.getItem('pf_prospects')
    if(s) setProspects(JSON.parse(s))
    else{ localStorage.setItem('pf_prospects', JSON.stringify(DEMO_PROSPECTS)); setProspects(DEMO_PROSPECTS)}
    const u = localStorage.getItem('pf_user')
    if(u) setUser(JSON.parse(u))
  },[])

  const plan = user?.subscription?.plan || 'starter'
  const limits = PLANS[plan]?.limits

  const add = ()=>{
    const next = { id:'p'+Date.now(), name:'Nouveau Prospect', company:'', role:'', sector:'', phone:'', whatsapp:'', email:'', site:'', status:'Nouveau', value:0, notes:'', lastInteraction:'', nextFollowUp:'' }
    const updated = [next, ...prospects]
    setProspects(updated)
    localStorage.setItem('pf_prospects', JSON.stringify(updated))
    if(limits.prospects !== 'unlimited' && typeof limits.prospects === 'number' && updated.length > limits.prospects){ alert('Limite de prospects atteinte pour votre forfait. Considérez une montée en gamme.') }
  }

  return (<div>
    <h1>Prospects</h1>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <button className="button" onClick={add}>Nouveau prospect</button>
      <div className="small">{prospects.length} / {limits?.prospects === 'unlimited' ? '∞' : limits?.prospects}</div>
    </div>
    <div className="card" style={{marginTop:12}}>
      <table className="table">
        <thead><tr><th>Nom</th><th>Entreprise</th><th>Statut</th><th>Valeur</th></tr></thead>
        <tbody>
          {prospects.map(p=> (<tr key={p.id}><td>{p.name}</td><td>{p.company}</td><td>{p.status}</td><td>${p.value}</td></tr>))}
        </tbody>
      </table>
    </div>
  </div>)
}
