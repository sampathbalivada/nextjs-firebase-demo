// firebaseService.js

import { getDatabase, ref, get } from 'firebase/database';
import firebaseApp from '../firebase';

const database = getDatabase(firebaseApp);

export const fetchData = async () => {
  const dataRef = ref(database, '/data');
  const snapshot = await get(dataRef);
  return snapshot.val();
};
