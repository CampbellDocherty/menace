import { app } from './index';
import { getDatabase, set, ref, get, child } from 'firebase/database';

export const database = getDatabase(app);

export type UserDetails = {
  name: string;
  result: number;
  multiplier: number;
  completed: number;
  email: string;
};

export const addUser = async (id: string, details: UserDetails) => {
  await set(ref(database, 'users/' + id), details);
};

export const getUsers = async () => {
  const response = {
    users: null,
    isError: false,
  };
  const dbRef = ref(database);
  await get(child(dbRef, 'users/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        response.users = snapshot.val();
      } else {
        response.users = null;
      }
    })
    .catch(() => {
      response.isError = true;
    });

  return response;
};
