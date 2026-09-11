import { useState } from 'react'
import { PLANS } from '../lib/plans'

export default function Pricing(){
  const [selected,setSelected] = useState('starter')
  return (<div>
    <h1>Tarifs</h1>
    <p className="small">Choisissez un forfait — simulation de paiement disponible.</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12,marginTop:12}}>
      {Object.values(PLANS).map(p=> (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <div style={{fontSize:18,fontWeight:600}}>${p.price}/mois</div>
          <ul>
            <li>Prospects: {typeof p.limits.prospects === 'number' ? p.limits.prospects : '∞'}</li>
            <li>Utilisateurs: {typeof p.limits.users === 'number' ? p.limits.users : '∞'}</li>
            <li>Relances/mois: {typeof p.limits.relancesPerMonth === 'number' ? p.limits.relancesPerMonth : '∞'}</li>
            <li>Rendez-vous/mois: {typeof p.limits.appointmentsPerMonth === 'number' ? p.limits.appointmentsPerMonth : '∞'}</li>
            <li>Générations IA/mois: {typeof p.limits.aiGenerationsPerMonth === 'number' ? p.limits.aiGenerationsPerMonth : '∞'}</li>
          </ul>
          <button className="button" onClick={()=>{ setSelected(p.id); window.location.href='/signup?plan='+p.id}}>Choisir</button>
        </div>
      ))}
    </div>

    <div style={{marginTop:20}} className="card">
      <h3>Comparaison</h3>
      <p className="small">Toutes les limites sont définies dans <code>lib/plans.ts</code> — modifiez cet unique fichier pour ajuster les quotas.</p>
    </div>
  </div>)
}
