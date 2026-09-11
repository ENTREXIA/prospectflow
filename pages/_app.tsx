import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [user,setUser] = useState<any>(null)
  useEffect(()=>{
    const s = localStorage.getItem('pf_user')
    if(s) setUser(JSON.parse(s))
  },[])
  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
