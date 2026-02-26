# Fitness Habit Tracker - Complete Deployment Guide

## 🚀 Deploy to Vercel (Frontend) + Railway (Backend)

This guide will help you deploy your Fitness Habit Tracker to production.

---

## **Phase 1: Database Setup (MongoDB Atlas)**

### Step 1.1: Create MongoDB Account
1. Visit https://www.mongodb.com/cloud/atlas
2. Sign up (free)
3. Create a new organization
4. Create a new project

### Step 1.2: Create a Cluster
1. Click **"Create Deployment"**
2. Choose **"M0 Sandbox"** (free tier)
3. Select your preferred region
4. Click **"Create Cluster"** (takes 2-3 minutes)

### Step 1.3: Create Database User
1. In Atlas, go to **Database Access**
2. Click **"Add New Database User"**
3. Username: `fitnesstracker`
4. Password: `GenerateSecurePassword123!`
5. Click **"Add User"**

### Step 1.4: Whitelist IP
1. Go to **Network Access**
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### Step 1.5: Get Connection String
1. In your cluster, click **"Connect"**
2. Choose **"Drivers"** → **"Node.js"**
3. Copy the connection string
4. Replace `<password>` with your database password
5. Save it - you'll need it soon

**Example:**
```
mongodb+srv://fitnesstracker:GenerateSecurePassword123!@cluster0.abc123.mongodb.net/fitness-habit-tracker?retryWrites=true&w=majority
```

---

## **Phase 2: Backend Deployment (Railway)**

### Step 2.1: Create Railway Account
1. Visit https://railway.app
2. Sign up with **GitHub** (recommended)
3. Authorize Railway to access your GitHub

### Step 2.2: Connect Your Repository
1. Click **"New Project"**
2. Select **"Deploy from GitHub"**
3. Select **`nagulog1/fitness-habit-tracker`**
4. Railway will auto-detect the project

### Step 2.3: Configure Backend Service
1. Click on the **`server`** directory in Railway
2. Go to **"Settings"**
3. Set **"Root Directory"** to `/server`
4. Set **"Start Command"** to `npm start`

### Step 2.4: Add Environment Variables
1. Go to **"Variables"** tab
2. Add these variables:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://fitnesstracker:GenerateSecurePassword123!@cluster0.abc123.mongodb.net/fitness-habit-tracker?retryWrites=true&w=majority
   JWT_SECRET=your_ultra_secure_secret_key_at_least_32_characters_long_12345
   NODE_ENV=production
   ```
3. Click **"Deploy"**

### Step 2.5: Get Your API URL
1. Once deployed, find your service URL
2. It will look like: `https://fitness-api-prod.railway.app`
3. **Copy this URL** - you'll need it for frontend deployment

---

## **Phase 3: Frontend Deployment (Vercel)**

### Step 3.1: Create Vercel Account
1. Visit https://vercel.com
2. Sign up with **GitHub**
3. Authorize Vercel to access your repositories

### Step 3.2: Import Your Repository
1. Click **"Add New..."** → **"Project"**
2. Search for **`fitness-habit-tracker`**
3. Click **"Import"**

### Step 3.3: Configure Project Settings
1. Set **"Framework Preset"** to **"Vite"**
2. Set **"Root Directory"** to `./client`
3. Set **"Build Command"** to `npm run build`
4. Set **"Output Directory"** to `dist`
5. Set **"Install Command"** to `npm install`

### Step 3.4: Add Environment Variables
1. Click **"Environment Variables"**
2. Add variable:
   ```
   VITE_API_URL=https://fitness-api-prod.railway.app/api
   ```
   (Replace with your actual Railway URL)
3. Click **"Save"**

### Step 3.5: Deploy
1. Click **"Deploy"**
2. Wait for the build to complete (2-3 minutes)
3. You'll get a production URL: `https://fitness-habit-tracker.vercel.app`

---

## **Phase 4: Testing & Verification**

### Step 4.1: Test Frontend
1. Open your Vercel URL in browser
2. Navigate to **"Register"**
3. Create a test account
4. You should see the Dashboard

### Step 4.2: Test Backend Connection
1. In Dashboard, click **"+ Add Habit"**
2. Create a habit: `Morning Run`
3. Click **"Create Habit"**
4. You should see it appear on the dashboard

### Step 4.3: Test Database
1. Create 2-3 habits
2. Mark some as complete
3. Refresh the page
4. Your data should persist

### Step 4.4: Check Logs
**Railway Logs:**
- Go to Railway dashboard
- View logs to check for errors

**Vercel Logs:**
- Go to Vercel dashboard
- Click your project
- View deployment logs

---

## **Phase 5: Custom Domain (Optional)**

### Add Domain to Vercel
1. Go to Vercel project settings
2. Click **"Domains"**
3. Add your custom domain
4. Follow the DNS setup instructions

### Add Domain to Railway (Backend)
1. Go to Railway project settings
2. Add your custom domain
3. Update frontend `.env` with new URL

---

## **🔐 Security Checklist**

- [ ] MongoDB password is secure (20+ characters)
- [ ] JWT_SECRET is secure (32+ characters)
- [ ] Environment variables are NOT in `.env` file
- [ ] `.gitignore` includes `.env`
- [ ] `.env` files are NOT committed to GitHub
- [ ] MongoDB IP whitelist is set
- [ ] Use HTTPS only (automatic with Vercel/Railway)

---

## **📊 Monitoring & Maintenance**

### Monitor Your App
1. **Railway Dashboard**: Check CPU, Memory, Requests
2. **Vercel Analytics**: Check page performance
3. **MongoDB Atlas**: Check storage usage

### Update Your App
1. Commit changes to GitHub
2. Railway auto-deploys backend changes
3. Vercel auto-deploys frontend changes
4. Monitor deployment logs for errors

---

## **🐛 Troubleshooting**

### Issue: Frontend can't reach backend
**Solution:**
- Check `VITE_API_URL` matches your Railway URL
- Make sure Railway service is running
- Check network tab in browser DevTools

### Issue: Login not working
**Solution:**
- Check MongoDB connection string
- Verify `JWT_SECRET` matches on both frontend and backend
- Check MongoDB Atlas IP whitelist

### Issue: Data not persisting
**Solution:**
- Check MongoDB connection in Railway logs
- Verify `MONGO_URI` environment variable
- Check MongoDB Atlas cluster status

### Issue: Vercel build fails
**Solution:**
- Check build logs in Vercel dashboard
- Verify `package.json` in client folder
- Ensure all dependencies are installed

---

## **📱 Your Live Application URLs**

Once deployed:
- **Frontend**: https://fitness-habit-tracker.vercel.app
- **Backend API**: https://fitness-api-prod.railway.app
- **API Health Check**: https://fitness-api-prod.railway.app/

---

## **🎉 Deployment Complete!**

Your Fitness Habit Tracker is now live and production-ready!

### Next Steps:
1. ✅ Share your app with friends
2. ✅ Monitor performance
3. ✅ Collect feedback
4. ✅ Add more features based on feedback

### Support:
- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **MongoDB Docs**: https://docs.mongodb.com

---

**Happy deploying! 🚀**
