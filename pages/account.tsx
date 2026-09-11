import { useEffect, useState } from 'react'
import { PLANS } from '../lib/plans'

export default function Account(){
  const [user,setUser] = useState<any>(null)
  const [mpesa,setMpesa] = useState('+243835998859')
  const [orange,setOrange] = useState('+243855794283')

  useEffect(()=>{
    const s = localStorage.getItem('pf_user')
    if(s) setUser(JSON.parse(s))
    const cfg = localStorage.getItem('pf_billing')
    if(cfg){ const c = JSON.parse(cfg); if(c.mpesa) setMpesa(c.mpesa); if(c.orange) setOrange(c.orange) }
  },[])

  const save = ()=>{
    localStorage.setItem('pf_billing', JSON.stringify({mpesa,orange}))
    alert('Informations de paiement (mode démo) sauvegardées localement. Aucune transaction réelle ne sera effectuée.')
  }

  return (<div>
    <h1>Compte & Abonnement</h1>
    <div className="card" style={{maxWidth:720}}>
      <h3>Profil</h3>
      <div className="small">{user?.email || 'Utilisateur non connecté'}</div>
      <h3 style={{marginTop:12}}>Abonnement actuel</h3>
      <div>{user?.subscription?.plan ? PLANS[user.subscription.plan].name + " — $"+PLANS[user.subscription.plan].price+"/mois" : 'Aucun'}</div>
      <h3 style={{marginTop:12}}>Coordonnées de paiement (mode démonstration)</h3>
      <div className="form-row"><input className="input" value={mpesa} onChange={e=>setMpesa(e.target.value)} /></div>
      <div className="form-row"><input className="input" value={orange} onChange={e=>setOrange(e.target.value)} /></div>
      <div style={{display:'flex',gap:8}}>
        <button className="button" onClick={save}>Sauvegarder</button>
      </div>
      <p className="small">Les numéros ci-dessus sont préremplis: M-Pesa {mpesa} et Orange Money {orange}. Ceci est une configuration de démonstration uniquement. Le prototype ne déclenche aucun transfert réel.</p>
    </div>
  </div>)
}
