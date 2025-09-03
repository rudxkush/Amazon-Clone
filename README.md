# Amazon Clone - ReactJS E-commerce Application

A full-featured Amazon clone built with React.js, Firebase, and Material-UI, featuring real-time authentication, shopping cart functionality, and secure payment processing.

![Amazon Clone](./public/amazon-head.png)

## 🚀 Features

- **🔐 User Authentication** - Firebase Auth with email/password
- **🛒 Shopping Cart** - Add/remove items with real-time updates
- **💳 Secure Payments** - Stripe integration for real transactions
- **📱 Responsive Design** - Mobile-first approach
- **🔥 Real-time Database** - Firebase Firestore integration
- **🎨 Modern UI** - Material-UI components
- **⚡ Fast Performance** - Optimized React components
- **🔒 Security** - Environment variables for sensitive data

## 🛠️ Tech Stack

- **Frontend:** React 18, Material-UI v5, React Router v6
- **Backend:** Firebase (Auth, Firestore, Hosting)
- **Payments:** Stripe API
- **State Management:** React Context API
- **Styling:** CSS3, Material-UI
- **Build Tool:** Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudxkush/Amazon-Clone.git
   cd Amazon-Clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your Firebase configuration in `.env`

4. **Start the development server**
   ```bash
   npm start
   ```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Copy your config to `.env` file

### Stripe Setup
1. Create a Stripe account at [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your publishable and secret keys
3. Add them to your environment variables

## 🚀 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Home.js           # Homepage with products
│   ├── Product.js        # Individual product component
│   ├── Checkout.js       # Shopping cart page
│   ├── Login.js          # Authentication page
│   └── Footer.js         # Footer component
├── firebase.js           # Firebase configuration
├── StateProvider.js      # Context API setup
├── reducer.js           # State management logic
└── App.js              # Main application component
```

## 🔐 Security Features

- Environment variables for sensitive data
- Firebase security rules
- Input validation and sanitization
- Secure authentication flow
- Protected routes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Firebase](https://firebase.google.com/) for backend services
- [Material-UI](https://mui.com/) for UI components
- [Stripe](https://stripe.com/) for payment processing
- [React](https://reactjs.org/) for the amazing framework

## 📞 Support

For support, email kushwahrudra919@gmail.com or create an issue in this repository.

---

**⭐ Star this repository if you found it helpful!**