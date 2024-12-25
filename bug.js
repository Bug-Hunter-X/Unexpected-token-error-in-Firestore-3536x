const db = firebase.firestore();

db.collection('cities').doc('BJ').set({
  name: 'Beijing',
  country: 'China'
})
  .then(() => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(error => {
    console.error("Error adding document: ", error);
  });