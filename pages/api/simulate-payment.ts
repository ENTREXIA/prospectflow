// API route to simulate a payment
export default function handler(req:any, res:any){
  if(req.method !== 'POST') return res.status(405).end()
  // For demo: accept body {plan, method}
  const body = req.body || {}
  // DO NOT process real payments here.
  // Return a simulated success response and include the demo recipient numbers from localStorage will be used client-side.
  res.status(200).json({ success: true, message: 'Paiement simulé accepté. Le forfait sera appliqué localement dans le prototype.' })
}
