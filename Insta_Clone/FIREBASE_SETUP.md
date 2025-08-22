# Firebase Setup Instructions

## Current Issue: "Missing or insufficient permissions"

This error occurs because your Firestore security rules are too restrictive. Here's how to fix it:

## Solution 1: Update Firestore Security Rules (Recommended for Development)

1. Go to your Firebase Console: https://console.firebase.google.com/
2. Select your project: `instagramclone-83277`
3. Navigate to **Firestore Database** → **Rules**
4. Replace the existing rules with these development-friendly rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null; // Allow reading other users for chat
    }

    // Allow authenticated users to read/write chats they participate in
    match /chats/{chatId} {
      allow read, write: if request.auth != null &&
        request.auth.uid in resource.data.participants;
    }

    // Allow authenticated users to read/write chat messages
    match /chats/{chatId}/messages/{messageId} {
      allow read, write: if request.auth != null;
    }

    // Allow authenticated users to manage their user chats
    match /userChats/{userId}/items/{chatId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Solution 2: Temporary Open Rules (For Testing Only)

If you want to quickly test everything, you can use these **TEMPORARY** rules (NOT for production):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## How to Apply Rules:

1. Copy the rules above
2. Paste them in the Firebase Console → Firestore → Rules
3. Click **"Publish"**
4. Wait 1-2 minutes for the rules to take effect
5. Refresh your app and try again

## After Fixing Firebase Rules:

1. **Sign up/Login** to your app
2. **Click on "👥 People"** in the sidebar
3. **Click the "+" button** to create test users
4. **Start chatting** with the test users!

## Features You Can Test:

- ✅ User Authentication (Email/Password & Google)
- ✅ Profile Management
- ✅ User Discovery
- ✅ Real-time Chat
- ✅ Message History

## Note:

The current Firebase configuration in your `index.html` is already set up correctly. You just need to fix the security rules to allow the operations.
