import Head from 'next/head'
import { useState } from 'react'
import { MaintenanceMode } from '../components/maintenance-mode'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const [ canBypass, setCanBypass ] = useState(false);

  const isMaintenanceMode = process.env.NEXT_PUBLIC_IS_MAINTENANCE_MODE == 1;

  return canBypass ? (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  ) : isMaintenanceMode ? (
    <MaintenanceMode setCanBypass={setCanBypass}/>
  ) : (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
