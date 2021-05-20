import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA8715oy4MGfLsc-IEXdGVuml16pzydgQc",
    authDomain: "itss-pj.firebaseapp.com",
    projectId: "itss-pj",
    storageBucket: "itss-pj.appspot.com",
    messagingSenderId: "440333315638",
    appId: "1:440333315638:web:f365b60aefd98e9d487297"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getFirebaseItems = async () => {
  try {
    const data = await db.collection("todos").get();
    const items = data.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const data = db.collection("todos");
    await data.add(item);
  } catch (err) {
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const data = db.collection("todos").doc(id);
    await data.update(item);
  } catch (err) {
  }
}

export const clearFirebaseItem = async (item) => {
  const data = db.collection("todos").doc(item.id);
  await data.delete().then(function () {
  }).catch(function (err) {
  });
};