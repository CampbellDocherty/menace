import { app } from './index';
import { getDatabase, set, ref } from 'firebase/database';

export const database = getDatabase(app);

type UserDetails = {
  name: string;
  result: number;
  multiplier: number;
  completed: number;
};

export const addUser = (id: string, details: UserDetails) => {
  set(ref(database, 'users/' + id), details);
};
