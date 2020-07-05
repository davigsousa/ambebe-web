import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import SocketClient from 'socket.io-client';
import { getUser, logout } from '../../services/auth';

import Header from './components/Header';
import CheckoutsLabel from './components/CheckoutsLabel';
import Checkout from './components/Checkout';
import { Container, Checkouts } from './styles';

function Admin() {
  const history = useHistory();

  // const [socket, setSocket] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    // const io = SocketClient(process.env.REACT_APP_API_URL);
    // setSocket(io);

    // io.on('notification', (data) => {
    //   io.emit('confirmation', data);
    // });

    const user = getUser();

    setName(user.name);
    setEmail(user.email);
    setCity(user.city);
  }, []);

  return (
    <Container>
      <Header
        name={name}
        email={email}
        city={city}
        onLogout={() => {
          logout();
          history.push('/login');
        }}
      />

      <CheckoutsLabel />
      <Checkouts>
        {
          checkouts.map(({ checkin, orders }) => (
            <Checkout name={checkin.user.name} time={checkin.time} orders={orders} />
          ))
        }
      </Checkouts>
    </Container>
  );
}

export default Admin;
