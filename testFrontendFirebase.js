// Test script to check frontend Firebase connection
// Run this in your browser console on the admin page

console.log('🧪 Testing Frontend Firebase Connection...');

// Check if Firebase is loaded
if (typeof firebase === 'undefined') {
  console.error('❌ Firebase is not loaded!');
} else {
  console.log('✅ Firebase is loaded');
  console.log('Firebase version:', firebase.SDK_VERSION);
}

// Check if Firestore is available
if (typeof firebase.firestore === 'undefined') {
  console.error('❌ Firestore is not available!');
} else {
  console.log('✅ Firestore is available');
}

// Check if Auth is available
if (typeof firebase.auth === 'undefined') {
  console.error('❌ Auth is not available!');
} else {
  console.log('✅ Auth is available');
}

// Check current user
const currentUser = firebase.auth().currentUser;
if (currentUser) {
  console.log('✅ User is authenticated:', currentUser.email);
} else {
  console.log('❌ No user authenticated');
}

// Test Firestore connection
console.log('🔍 Testing Firestore connection...');
firebase.firestore().collection('content').limit(1).get()
  .then((querySnapshot) => {
    console.log('✅ Firestore query successful!');
    console.log('Found', querySnapshot.size, 'documents');
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      console.log('Sample document:', doc.data());
    }
  })
  .catch((error) => {
    console.error('❌ Firestore query failed:', error);
    if (error.code === 'failed-precondition') {
      console.log('🔗 Create index here:', error.message);
    }
  });

console.log('🧪 Test complete! Check the results above.');
