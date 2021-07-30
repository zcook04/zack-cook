import '../styles/globals.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) { 
  switch (Component.name) {
    case "Pokedex":
      return <Component {...pageProps} />
    default:
      return <Layout><Component {...pageProps} /></Layout>
  }
  
}

export default MyApp
