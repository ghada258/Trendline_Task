# Frontend Task – Next.js

A Next.js frontend project implementing **authentication flow** and a **pixel-perfect responsive UI** according to the provided mockups.  

This project demonstrates:  
- Register, Login, and Verify Account pages  
- Home Page (Figma design integrated)  
- Token-based authentication stored in localStorage  
- Dashboard page displaying the logged-in user
- Full responsiveness for desktop and mobile  
- API integration with Trendline Marketing backend  

---

## Requirements

### Authentication Flow

- **Register Page**  
  - Fields: Full Name, Email, Password, Phone Number, Country Code  
  - API Endpoint: `https://tinytales.trendline.marketing/api/register`  

- **Login Page**  
  - Fields: Email and Password  
  - API Endpoint: `https://tinytales.trendline.marketing/api/login`  

- **Verify Account Page**  
  - Input for verification code  
  - Note: The correct verification code for testing is `123456`  
  - API Endpoint: `https://tinytales.trendline.marketing/api/verify`  

- **Dashboard**  
  - Displays: "Welcome, [User Name]"  
  - Redirects after successful login  
  - Token saved in `localStorage`  

- **Home Page**  
  - Pixel-perfect implementation based on Figma mockup  
  - Figma link: [Home Page Design](https://www.figma.com/design/LwAzcMC020tu1lX5CtK7La/Untitled?node-id=1-387&t=GpMC1qoDrDnNI7Y6-0)  

---

### User Interface (UI)

- The provided UI mockup must be implemented **pixel-perfect**.  
- Fully responsive for **desktop** and **mobile**.  
- Evaluation is based on:
  - **Register/Login pages** → API integration  
  - **UI mockup page** → exact design implementation  

---

## Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ghada258/Trendline_Task.git
cd Trendline_Task

npm install

npm run dev

## 👩‍💻 Developer
**Ghada El-Sayed Abou El-Fotouh**  
Front-End Developer 
Email: ghadaelsayed20@gmail.com 
github: https://github.com/ghada258
linkedIn : https://www.linkedin.com/in/ghada-elsayed-


