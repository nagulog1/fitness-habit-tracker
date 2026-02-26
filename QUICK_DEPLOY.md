# Quick Start Deployment

## Before You Start
Make sure you have:
- [ ] GitHub account (code already pushed)
- [ ] MongoDB Atlas account (free)
- [ ] Vercel account
- [ ] Railway account

## Step-by-Step

### 1️⃣ MongoDB Atlas (2 min)
```
1. Go to mongodb.com/cloud/atlas
2. Create free cluster
3. Add database user: fitnesstracker / password
4. Whitelist all IPs (0.0.0.0/0)
5. Copy connection string
```

### 2️⃣ Railway Backend (5 min)
```
1. Go to railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select: nagulog1/fitness-habit-tracker
5. Add Environment Variables (in Railway dashboard):
   - MONGO_URI=your_mongodb_connection_string
   - JWT_SECRET=your_secret_key_32chars
   - PORT=5000
   - NODE_ENV=production
6. Deploy & copy your Railway API URL
```

### 3️⃣ Vercel Frontend (5 min)
```
1. Go to vercel.com
2. Sign up with GitHub
3. Import Project → Select fitness-habit-tracker
4. Set Root Directory: ./client
5. Add Environment Variable:
   - VITE_API_URL=https://your-railway-url/api
6. Deploy & wait 2-3 min
```

### 4️⃣ Test It!
```
1. Open your Vercel URL
2. Register an account
3. Add a habit
4. Mark it complete
5. Done! 🎉
```

---

## Environment Variables Reference

### Server (.env for Railway)
```
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://fitnesstracker:PASSWORD@cluster.mongodb.net/fitness-habit-tracker
JWT_SECRET=your_super_secure_secret_32_chars_minimum_required_length_validation
```

### Client (.env for Vercel)
```
VITE_API_URL=https://your-railroad-app-name.railway.app/api
```

---

## Deployment URLs (Once Complete)
- Frontend: https://your-app.vercel.app
- Backend: https://your-app.railway.app
- API: https://your-app.railway.app/api

---

**Your app will auto-update when you push to GitHub!** ✅

Questions? Check DEPLOYMENT_GUIDE.md for detailed instructions.
