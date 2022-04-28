import '../styles/globals.css'
import '../styles/homepage.module.css'
import '../styles/Home.module.css'
import {ToastProvider} from 'react-toast-notifications'

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider autoDismiss={true} autoDismissTimeout="1500">
        <Component {...pageProps} />
    </ToastProvider>          
  );
}

export default MyApp
