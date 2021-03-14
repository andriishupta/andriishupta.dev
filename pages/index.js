import Head from 'next/head'
import {Box, Container, CssBaseline, Typography} from '@material-ui/core'
import Countdown from 'react-countdown';
import {useCallback} from 'react';

export default function Home() {
  const countdownDate = new Date('2021-04-01').toISOString();

  const getCaption = useCallback((number, format) => `${number} ${number === 1 ? format : format + 's'}`, []);

  const renderCountdown = useCallback(
    ({days, hours, minutes, seconds}) => (
      <Typography variant="body1">
        {getCaption(days, 'day')} {getCaption(hours, 'hour')} {getCaption(minutes, 'minute')} {getCaption(seconds, 'second')} left.
      </Typography>
    ),
    []
  );

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
        <Container maxWidth="lg">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h1">Andrii Shupta: DEV</Typography>
            <Typography variant="h2">coming soon...</Typography>
            <Countdown date={countdownDate} renderer={renderCountdown}/>
          </Box>
        </Container>
      </main>

      {/*<footer>*/}
      {/*  Footer*/}
      {/*</footer>*/}
    </>
  )
}
