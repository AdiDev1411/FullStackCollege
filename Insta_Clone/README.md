# 💬 Chatter - Instagram/WhatsApp Clone

A modern real-time chat application built with Firebase, featuring email invitations and real user connections.

## 🚀 **Live Demo**

Deploy to Firebase Hosting to get your live URL!

## ✨ **Features**

### **Authentication**

- 📧 Email/Password registration and login
- 🔐 Google OAuth integration
- 👤 User profile management
- 🔒 Secure Firebase Authentication

### **Real-Time Messaging**

- 💬 Instant messaging between users
- 📱 Real-time message synchronization
- 💾 Message history persistence
- 🎨 Professional chat interface

### **User Management**

- 📧 Email invitation system
- 🔗 Shareable invitation links
- 👥 User discovery and search
- 🧪 Demo users for testing

### **Modern UI**

- 🌙 Dark theme design
- 📱 Responsive layout
- 🎯 Clean navigation
- ⚡ Fast and intuitive

## 🛠 **Tech Stack**

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Hosting:** Firebase Hosting
- **Real-time:** Firebase Real-time Listeners

## 🔥 **Quick Start**

### **1. Clone Repository**

```bash
git clone [your-repo-url]
cd Insta_Clone
```

### **2. Open in Browser**

```bash
# Open index.html in browser or use live server
```

### **3. Add Real Users**

1. Go to "People" section
2. Click "Invite" button
3. Send email invitations or generate shareable links
4. Friends create accounts and start chatting!

## 📧 **How to Invite Real Users**

### **Method 1: Email Invitations**

1. Click "Invite" → "Send Email Invitation"
2. Enter friend's email address
3. Email client opens with invitation
4. Send to your friend
5. They create account and join automatically

### **Method 2: Shareable Links**

1. Click "Invite" → "Generate Invitation Link"
2. Copy the generated link
3. Share via WhatsApp, Telegram, etc.
4. Friends click link and create account

## 🌐 **Firebase Deployment**

### **Deploy to Firebase Hosting:**

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Your app will be live at: `https://your-project.web.app`

## 📱 **Screenshots**

- 🔐 **Login/Signup Screen**
- 💬 **Chat Interface**
- 👥 **People Discovery**
- 📧 **Invitation System**
- 👤 **Profile Management**

## 🎯 **Project Requirements Fulfilled**

✅ **Login/Signup System** - Firebase Authentication  
✅ **Sidebar Navigation** - Clean UI with navigation  
✅ **Real-time Chat** - Firebase Firestore real-time  
✅ **Recent Chats** - Chat history display  
✅ **Firebase Hosting** - Ready for deployment  
✅ **GitHub Integration** - Version controlled

## 🔧 **Configuration**

The app uses Firebase configuration in `index.html`:

```javascript
const firebaseConfig = {
  // Your Firebase config
};
```

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📝 **License**

This project is for educational purposes - Part of Full Stack Development Course.

## 👨‍💻 **Author**

Built as part of SEM-5 Full Stack Development Practical.

---

**🚀 Ready to deploy? Check `DEPLOYMENT_GUIDE.md` for complete instructions!**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
