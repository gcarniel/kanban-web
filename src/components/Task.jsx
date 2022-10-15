import socketIO from 'socket.io-client';

import { Nav } from './Nav';
import { AddTask } from './AddTask';
import { TasksContainer } from './TasksContainer';

import { config } from '../constants.js';

const socket = socketIO.connect(config.socketURL);

export const Task = () => {
  return (
    <div>
      <Nav />
      <AddTask socket={socket} />
      <TasksContainer socket={socket} />
    </div>
  );
};
