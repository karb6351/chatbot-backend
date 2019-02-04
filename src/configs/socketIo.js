import io from 'socket.io-client';
const client = io('http://192.168.2.182:8000', {
  path: '/monitor'
});

export default client;