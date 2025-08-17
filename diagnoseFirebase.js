const admin = require('firebase-admin');

console.log('🔍 Diagnosing Firebase connection issues...');

try {
  // Try to load the service account key
  const serviceAccount = require('./firebase-service-account.json');
  console.log('✅ Service account key loaded successfully');
  
  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dfwpga-78d95-default-rtdb.firebaseio.com"
  });
  
  const db = admin.firestore();
  console.log('✅ Firebase Admin SDK initialized');
  
  // Test basic connection
  console.log('\n🔍 Testing basic Firestore connection...');
  
  // Check what collections exist
  const collections = await db.listCollections();
  console.log('📚 Available collections:');
  collections.forEach(col => {
    console.log(`   - ${col.id}`);
  });
  
  // Check content collection specifically
  console.log('\n🔍 Checking content collection...');
  try {
    const contentSnapshot = await db.collection('content').limit(5).get();
    console.log(`✅ Content collection accessible`);
    console.log(`   Found ${contentSnapshot.size} documents`);
    
    if (contentSnapshot.size > 0) {
      console.log('📝 Sample content documents:');
      contentSnapshot.docs.forEach((doc, index) => {
        const data = doc.data();
        console.log(`   ${index + 1}. ${data.contentId || 'No contentId'} (${data.page || 'No page'} > ${data.section || 'No section'})`);
      });
    }
  } catch (contentError) {
    console.error('❌ Content collection error:', contentError.message);
  }
  
  // Check images collection
  console.log('\n🔍 Checking images collection...');
  try {
    const imagesSnapshot = await db.collection('images').limit(5).get();
    console.log(`✅ Images collection accessible`);
    console.log(`   Found ${imagesSnapshot.size} documents`);
  } catch (imagesError) {
    console.error('❌ Images collection error:', imagesError.message);
  }
  
  // Check users collection
  console.log('\n🔍 Checking users collection...');
  try {
    const usersSnapshot = await db.collection('users').limit(5).get();
    console.log(`✅ Users collection accessible`);
    console.log(`   Found ${usersSnapshot.size} documents`);
  } catch (usersError) {
    console.error('❌ Users collection error:', usersError.message);
  }
  
  // Test authentication
  console.log('\n🔍 Testing Firebase Auth...');
  try {
    const auth = admin.auth();
    const userList = await auth.listUsers(5);
    console.log(`✅ Firebase Auth accessible`);
    console.log(`   Found ${userList.users.length} users`);
    
    if (userList.users.length > 0) {
      console.log('👥 Sample users:');
      userList.users.forEach((user, index) => {
        console.log(`   ${index + 1}. ${user.email} (${user.displayName || 'No name'})`);
      });
    }
  } catch (authError) {
    console.error('❌ Firebase Auth error:', authError.message);
  }
  
  console.log('\n🎯 Diagnosis complete!');
  
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
    console.error('❌ Error during diagnosis:', error.message);
  }
}
