# Trading Signals SaaS Platform 🚀

A full-stack SaaS application that provides trading signals with paid subscriptions using Stripe, built with FastAPI + React (Vite) and deployed on Render.

[**Try it out**]

(https://trading-signals-frontend.onrender.com)

## 🔥 **Features** 
* User authentication (Signup / Login with JWT)
* Free vs Paid user access
* Stripe Checkout payment integration
* Secure Stripe Webhooks
* Subscription state (is_paid) stored in database
* Redis caching for trading signals
* Protected API routes
* React frontend with Vite
* Fully deployed on Render (Frontend + Backend)

## 🧱 **Tech Stack**
### Backend
* FastAPI
* SQLAlchemy
* PostgreSQL (Render)
* Redis (Render)
* Stripe API
* JWT Authentication
* Uvicorn
### Frontend
* React (Vite)
* Axios
* React Router
* Deployed as Static Site on Render

## 📂 **Project Structure**
### Backend

Trading-signals-saas-backend/

    ├── app/
    │   ├── auth/
    │   │   ├── router.py
    │   │   ├── dependency.py
    │   │   ├── schemas.py
    │   │   └── utils.py
    │   ├── billing/
    │   │   └── router.py
    │   ├── signals/
    │   │   ├── router.py
    │   │   └── zerodha_mock.py
    │   ├── models.py
    ├── core/
    │   ├── config.py
    │   └── redis_client.py
    ├── tests/
    │   ├── conftest.py
    │   ├── test_auth.py
    │   ├── test_signals.py
    │   └── utils.py
    |── tradingenv/
    │── main.py
    ├── requirements.txt
    └── .env

### Frontend

    frontend/
    ├── public/
    ├── src/
    │   ├── api/
    │   │   ├── axios.jsx
    │   │   └── signals.jsx
    │   ├── assest/
    │   │   ├── CSS/
    │   │   |    └── style.css
    |   ├── common/
    |   |     ├── Button.jsx
    |   |     └── Table.jsx
    |   ├── components/
    |   |     ├── 404Error.jsx
    |   |     ├── Cancel.jsx
    |   |     ├── Dashboard.jsx
    |   |     ├── Login.jsx
    |   |     ├── Signals.jsx
    |   |     ├── Signup.jsx
    |   |     └── Success.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    └── vite.config.js


## **Environment Variables**
### Backend (.env)
* DATABASE_URL=postgresql://trading_signals_saas_user:5fASF38iyi1CxiM8OAHZZOrlHQRqpHJp@dpg-d5sqcnkoud1c73afeb00-a/trading_signals_saas
* FRONTEND_URL=https://trading-signals-frontend.onrender.com/
* PYTHON_VERSION = 3.11.0
* REDIS_URL=redis://red-d5sepd7pm1nc73crl2b0:6379
* SECRETKEY=supersecretkey
* STRIPE_SECRET_KEY=sk_test_51Su8DEROf0.......
* STRIPE_WEBHOOK_SECRET=whsec_KJhTYkWDUoWQWY4KQ5NSQ8JTs5umAkVz

### Frontend (.env)
* none

## **Local Development**
## Setup Guide

Follow these steps to run the project locally or deploy it.

---

### Backend Setup

1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd Trading-signals-saas-backend


2. Create and activate virtual environment  
python -m venv tradingenv


Windows
tradingenv\Scripts\activate


Linux / Mac
source tradingenv/bin/activate


3. Install dependencies
pip install -r requirements.txt


4. Create `.env` file in `Trading-signals-saas-backend/`

Write this in it
        
        DATABASE_URL=postgresql://user:password@host:port/dbname
        SECRET_KEY=your_jwt_secret
        STRIPE_SECRET_KEY=sk_test_xxx
        STRIPE_WEBHOOK_SECRET=whsec_xxx
        REDIS_URL=redis://username:password@host:port
        FRONTEND_URL=http://localhost:5173


6. Run backend
uvicorn main:app --reload

        main is file name main.py and app is fun name we call

Backend runs on:
        
        http://127.0.0.1:8000


---

### Stripe Webhook Setup (Local)

1. Login to Stripe CLI
stripe login


2. Start webhook listener
stripe listen --forward-to http://127.0.0.1:8000/billing/webhook


3. Copy the generated `whsec_...` key and add it to `.env`

---

### Frontend Setup (Vite + React)

This project uses **Vite + React** with modern frontend libraries.

---

### Tech Stack

- Vite
- React
- React Router DOM
- Axios
- Context API

---

### Prerequisites

- Node.js (v18 or above recommended)
- npm or yarn

---

### Installation Steps

1. Navigate to frontend directory
cd frontend


2. Install dependencies
npm install


Installed libraries include:
react
react-dom
react-router-dom
axios


(For local backend)

in axios file write local backend url

---

### Run Frontend Locally

npm run dev


Frontend runs on:
http://localhost:5173


---


### Render Deployment Notes

- Backend is deployed as a **Web Service**
- Frontend is deployed as a **Static Site**
- All environment variables must be added manually in Render
- Stripe webhook must point to:
https://<backend-service>.onrender.com/billing/webhook


---

### Default Behavior

- Free users see limited trading signals
- Paid users see full signals
- Subscription status is updated via Stripe webhook

## 💳 Stripe Payment Flow

User clicks Subscribe

Backend creates Stripe Checkout session

User completes payment

Stripe sends checkout.session.completed webhook

Backend verifies webhook signature

is_paid = true is updated in database

User gains full access to signals

### Webhook working



## Stripe Webhook (Local Testing)
    stripe login
    stripe listen --forward-to http://127.0.0.1:8000/billing/webhook

Copy the generated whsec_... into .env.

## 🌐 **Render Deployment**
### Backend (Web Service)
* Build Command:

      pip install -r requirements.txt
      
      Start Command:
      
      uvicorn app.main:app --host 0.0.0.0 --port 10000
      
      Frontend (Static Site)
      
      Build Command:
      
      npm run build

### Publish Directory:

    dist
    
    SPA Redirect (Render)
    Source: /*
    Destination: /index.html
    Status: 200

## 🔓 CORS Configuration (FastAPI)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["https://trading-signals-frontend.onrender.com"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

### 🧠 Free vs Paid Logic
    if not user.is_paid:
        return signals[:1]
    return signals

## 🛠 Future Improvements
* Real Zerodha Kite API integration
* Subscription plans (monthly/yearly)
* Admin dashboard
* Email notifications
* Rate limiting

# Screen Shots

* ### **LOGIN and SIGNUP**
<img width="1913" height="1080" alt="Screenshot (995)" src="https://github.com/user-attachments/assets/20a7960a-565a-4fd1-b00b-2d7ac320e3ee" />
<img width="1913" height="1080" alt="Screenshot (996)" src="https://github.com/user-attachments/assets/7d9e5dae-4ef7-4259-937b-a66c2ba40461" />

* ### **Subscribed user dashboard**

<img width="1895" height="1080" alt="Screenshot (997)" src="https://github.com/user-attachments/assets/3429c2f2-38a7-421f-bdf3-8174adc09f75" />
<img width="1909" height="1080" alt="Screenshot (998)" src="https://github.com/user-attachments/assets/4bc61def-c183-4631-b613-eef37501500f" />
<img width="1913" height="1080" alt="Screenshot (999)" src="https://github.com/user-attachments/assets/0a89faf0-ab88-4168-8f74-9893cb2ea240" />
<img width="1902" height="1080" alt="Screenshot (1000)" src="https://github.com/user-attachments/assets/c39a8af9-cca6-4f46-ab74-2d091665a268" />
<img width="1898" height="1080" alt="Screenshot (1001)" src="https://github.com/user-attachments/assets/2879fb1c-388f-4ac2-b434-6803eb6fca7a" />

* ### **Unsbscibed user dashboard**

<img width="1911" height="1080" alt="Screenshot (1003)" src="https://github.com/user-attachments/assets/9bb6cc6b-0fa4-4f60-b35a-b2796281522d" />
<img width="1913" height="1080" alt="Screenshot (1004)" src="https://github.com/user-attachments/assets/273a4337-7638-44aa-9307-5ab6a6f6d581" />

* ### **Stripe Payment ui**
<img width="1873" height="1080" alt="Screenshot (1005)" src="https://github.com/user-attachments/assets/3ca0b6cc-b43e-473b-a231-5eeb15f88939" />
<img width="1902" height="1080" alt="Screenshot (1006)" src="https://github.com/user-attachments/assets/441ad8f6-2242-46b7-867c-6959aab13e55" />
<img width="1878" height="1080" alt="Screenshot (1007)" src="https://github.com/user-attachments/assets/ec630ffc-e703-4b04-8277-341d97e08bde" />
<img width="1893" height="1080" alt="Screenshot (1008)" src="https://github.com/user-attachments/assets/1c65ff48-0185-4b72-ab54-e0329c8839ed" />

* ### **Success page**

<img width="1895" height="1080" alt="Screenshot (1010)" src="https://github.com/user-attachments/assets/1d7f0658-5dee-47a1-b2d7-4dc90cdb77f3" />


## **👤 Author**

Zeel Mavani

Full Stack Developer | Python | FastAPI | React
