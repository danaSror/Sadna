import '@/styles/globals.css'
import "@/styles/Home.module.css"
import "@/styles/CardStyles.css"; 
import 'font-awesome/css/font-awesome.min.css';
import Context from "../context/context"




export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
      </Context>
  )
}
