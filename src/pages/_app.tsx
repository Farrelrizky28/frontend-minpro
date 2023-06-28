import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './shared/layout'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from './redux/storeGlobal'

export default function App({ Component, pageProps }: AppProps) {
    return (
      <Provider store={store}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
      </Provider>
    )
  // }
}
