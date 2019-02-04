import client from '../configs/socketIo';

import { isOpen } from '../helpers/socketIo';

const subscribeToUsersMonitor = (cb) => {
  if (!isOpen(client)) return [];
  client.open();
  client.on('monitorUsersResponse', response => cb(null, response));
  client.emit('monitorUsers');
  
};

const disconnectToUserMonitor = () => {
  if (!isOpen(client)) return null;
  client.disconnect();
};

export { subscribeToUsersMonitor,  disconnectToUserMonitor };
