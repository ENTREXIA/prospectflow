import Link from 'next/link'
import { useEffect, useState } from 'react'
import { DEMO_PROSPECTS } from '../lib/demoData'
import { PLANS } from '../lib/plans'

export default function Home(){
  const [user,setUser] = useState<any>(null)
  const [prospects,setProspects] = useState<any[]>([])

  useEffect(()=>{
    const s = localStorage.getItem('pf_user')
    if(s) setUser(JSON.parse(s))
    const p = localStorage.getItem('pf_prospects')
    if(p) setProspects(JSON.parse(p))
    else{ localStorage.setItem('pf_prospects', JSON.stringify(DEMO_PROSPECTS)); setProspects(DEMO_PROSPECTS)}
  },[])

  const plan = user?.subscription?.plan || 'starter'
  const limits = PLANS[plan]?.limits

  return (<div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <h1>Tableau de bord</h1>
      <div>
        <Link href="/pricing"><button className="button">Changer d'abonnement</button></Link>
      </div>
    </div>
    <div className="grid" style={{marginTop:12}}>
      <div className="card">
        <h3>Prospects</h3>
        <div className="small">{prospects.length} / {limits?.prospects === 'unlimited' ? '∞' : limits?.prospects}</div>
      </div>
      <div className="card">
        <h3>Relances ce mois</h3>
        <div className="small">0 / {limits?.relancesPerMonth === 'unlimited' ? '∞' : limits?.relancesPerMonth}</div>
      </div>
      <div className="card">
        <h3>Générations IA</h3>
        <div className="small">0 / {limits?.aiGenerationsPerMonth === 'unlimited' ? '∞' : limits?.aiGenerationsPerMonth}</div>
      </div>
      <div className="card">
        <h3>Rendez-vous</h3>
        <div className="small">0 / {limits?.appointmentsPerMonth === 'unlimited' ? '∞' : limits?.appointmentsPerMonth}</div>
      </div>
    </div>

    <div style={{marginTop:12}} className="card">
      <h2>Activité récente</h2>
      <p className="small">Aucune activité réelle — prototype local.</p>
    </div>

  </div>)
}
