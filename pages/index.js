import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'

export default function Home() {
  return (
    <>
      <CssBaseline/>
      <Head>
        <title>Andrii Shupta: DEV</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>

      <main>
        Main
      </main>

      <footer>
        Footer
      </footer>
    </>
  )
}
