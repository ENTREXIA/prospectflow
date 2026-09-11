import { useState } from 'react'

export default function Assistant(){
  const [prompt,setPrompt] = useState('')
  const [result,setResult] = useState('')

  const generate = (type:string)=>{
    // Simulation only: generate canned text
    const responses:any = {
      whatsapp: `Bonjour, je me permets de vous relancer concernant notre échange. Souhaitez-vous convenir d'un créneau pour en discuter ?`,
      email: `Bonjour,\n\nJe reviens vers vous au sujet de notre proposition. Seriez-vous disponible pour un appel la semaine prochaine ?\n\nCordialement,`,
      callscript: `Intro: Bonjour je suis [Votre Nom] de [Société]. Objet: discuter de [offre]...`,
      objection: `Je comprends votre point. Voici une réponse possible: ...`,
      prep: `Points à préparer: objectifs du client, budget, décisionnaires...`
    }
    setResult(responses[type] || 'Génération simulée: '+prompt)
    // increment local usage counter
    const stats = JSON.parse(localStorage.getItem('pf_usage')||'{}')
    stats.ai = (stats.ai||0)+1
    localStorage.setItem('pf_usage', JSON.stringify(stats))
  }

  return (<div>
    <h1>Assistant commercial IA (simulation)</h1>
    <div className="card">
      <textarea className="input" style={{height:120}} placeholder="Décrivez le contexte" value={prompt} onChange={e=>setPrompt(e.target.value)} />
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <button className="button" onClick={()=>generate('whatsapp')}>Générer message WhatsApp</button>
        <button className="button" onClick={()=>generate('email')}>Générer email</button>
        <button className="button" onClick={()=>generate('callscript')}>Script d'appel</button>
      </div>
      <div style={{marginTop:12}}>
        <h4>Résultat</h4>
        <div className="card small">{result}</div>
      </div>
    </div>
  </div>)
}
