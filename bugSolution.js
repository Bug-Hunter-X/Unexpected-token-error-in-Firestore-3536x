const db = firebase.firestore(); // Ensure you've imported firebase correctly

// ...rest of your firebase initialization and configuration

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