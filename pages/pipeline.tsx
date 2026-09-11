import { useEffect, useState } from 'react'

const STAGES = ['Nouveau','Contacté','Réponse reçue','Qualifié','Rendez-vous','Proposition','Négociation','Client','Perdu']

export default function Pipeline(){
  const [byStage,setByStage] = useState<Record<string,any[]>>({})
  useEffect(()=>{
    const p = localStorage.getItem('pf_prospects')
    const list = p ? JSON.parse(p) : []
    const map:Record<string,any[]> = {}
    STAGES.forEach(s=>map[s]=[])
    list.forEach((pr:any)=>{ const s = pr.status || 'Nouveau'; if(!map[s]) map[s]=[]; map[s].push(pr) })
    setByStage(map)
  },[])
  return (<div>
    <h1>Pipeline</h1>
    <div style={{overflowX:'auto'}}>
      <div style={{display:'flex',gap:12}}>
        {STAGES.map(stage=> (
          <div key={stage} style={{minWidth:220}} className="card">
            <h4>{stage} ({byStage[stage]?.length || 0})</h4>
            <ul>
              {(byStage[stage]||[]).map(p=>(<li key={p.id} className="small">{p.name} — {p.company}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>)
}
