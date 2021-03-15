import { useCallback } from 'react';
import Countdown from 'react-countdown';
import dayjs from 'dayjs';

import { Box, Container, Typography } from '@material-ui/core'

export default function Home() {
  const countdownDate = dayjs('2021-04-01');

  const getCaption = useCallback((number, format) => `${ number } ${ number === 1 ? format : format + 's' }`, []);

  const renderCountdown = useCallback(
    ({ days, hours, minutes, seconds }) => (
      <Typography variant="body1">
        { getCaption(days, 'day') } { getCaption(hours, 'hour') } { getCaption(minutes, 'minute') } { getCaption(seconds, 'second') } left.
      </Typography>
    ),
    []
  );

  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h1">Andrii Shupta: DEV</Typography>
            <Typography variant="h2">coming soon...</Typography>
            <Countdown date={ countdownDate } renderer={ renderCountdown }/>
          </Box>
        </Container>
      </main>

      {/*<footer>*/ }
      {/*  Footer*/ }
      {/*</footer>*/ }
    </>
  )
}
