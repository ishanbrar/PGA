const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// You'll need to download your service account key from Firebase Console
// Project Settings > Service Accounts > Generate New Private Key
const serviceAccount = require('./firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dfwpga-78d95-default-rtdb.firebaseio.com"
});

async function createAdminUser() {
  try {
    console.log('🔐 Creating admin user...');
    
    // Create user with email and password
    const userRecord = await admin.auth().createUser({
      email: 'dfwpunjabigolf@gmail.com',
      password: 'golfclub2024',
      displayName: 'Admin User',
      emailVerified: true
    });

    console.log('✅ Admin user created successfully!');
    console.log(`   UID: ${userRecord.uid}`);
    console.log(`   Email: ${userRecord.email}`);
    console.log(`   Display Name: ${userRecord.displayName}`);
    
    // Set custom claims for admin role
    await admin.auth().setCustomUserClaims(userRecord.uid, {
      role: 'admin',
      permissions: {
        canEditContent: true,
        canUploadImages: true,
        canManageUsers: true,
        canPublish: true
      }
    });

    console.log('✅ Admin role and permissions set!');
    console.log('\n🎉 Admin user setup complete!');
    console.log('\n📋 Login Credentials:');
    console.log('   Email: dfwpunjabigolf@gmail.com');
    console.log('   Password: golfclub2024');
    
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      console.log('ℹ️  Admin user already exists!');
      console.log('   You can use the existing credentials:');
      console.log('   Email: dfwpunjabigolf@gmail.com');
      console.log('   Password: golfclub2024');
    } else {
      console.error('❌ Error creating admin user:', error.message);
    }
  }
}

// Run the script
createAdminUser().catch(console.error);
