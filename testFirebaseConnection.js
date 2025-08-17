const admin = require('firebase-admin');

console.log('🔍 Testing Firebase connection...');

try {
  // Try to load the service account key
  const serviceAccount = require('./firebase-service-account.json');
  console.log('✅ Service account key loaded successfully');
  
  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dfwpga-default-rtdb.firebaseio.com" // Update this URL if needed
  });
  
  const db = admin.firestore();
  console.log('✅ Firebase Admin SDK initialized');
  
  // Test connection by reading from content collection
  console.log('🔍 Testing Firestore connection...');
  
  db.collection('content').limit(1).get()
    .then((snapshot) => {
      console.log('✅ Firestore connection successful!');
      console.log(`📊 Found ${snapshot.size} documents in content collection`);
      
      if (snapshot.size > 0) {
        const doc = snapshot.docs[0];
        const data = doc.data();
        console.log('📝 Sample document:');
        console.log(`   ID: ${doc.id}`);
        console.log(`   Content ID: ${data.contentId || 'N/A'}`);
        console.log(`   Page: ${data.page || 'N/A'}`);
        console.log(`   Section: ${data.section || 'N/A'}`);
      }
      
      console.log('\n🎉 Firebase connection test passed! You can now run:');
      console.log('   node uploadContent.js upload');
      
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Firestore connection failed:', error.message);
      console.log('\n🔧 Troubleshooting tips:');
      console.log('   1. Check your Firebase project ID');
      console.log('   2. Verify service account has proper permissions');
      console.log('   3. Check Firebase security rules');
      process.exit(1);
    });
    
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('❌ Service account key not found!');
    console.log('\n📋 To fix this:');
    console.log('   1. Go to Firebase Console → Project Settings → Service Accounts');
    console.log('   2. Click "Generate New Private Key"');
    console.log('   3. Download the JSON file');
    console.log('   4. Rename it to "firebase-service-account.json"');
    console.log('   5. Place it in your project root folder');
  } else {
    console.error('❌ Error loading service account:', error.message);
  }
  process.exit(1);
}
