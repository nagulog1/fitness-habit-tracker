#!/bin/bash

# Fitness Habit Tracker - Automated Deployment Script
# This script helps you deploy to Railway and Vercel

echo "🚀 Fitness Habit Tracker Deployment Helper"
echo "==========================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Please run: git init"
    exit 1
fi

echo "✅ Git repository found"
echo ""

# Check if all files are committed
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes"
    echo "Run: git add . && git commit -m 'Prepare for deployment'"
    exit 1
fi

echo "✅ All files committed"
echo ""

# Display deployment instructions
echo "📋 DEPLOYMENT STEPS:"
echo "==================="
echo ""
echo "1. MONGODB ATLAS SETUP"
echo "   • Go to: https://www.mongodb.com/cloud/atlas"
echo "   • Create cluster (M0 free tier)"
echo "   • Get connection string"
echo ""

echo "2. RAILWAY BACKEND DEPLOYMENT"
echo "   • Go to: https://railway.app"
echo "   • Connect GitHub account"
echo "   • Import this repository"
echo "   • Set root directory to: /server"
echo "   • Add environment variables:"
echo "     - MONGO_URI=<your_mongodb_string>"
echo "     - JWT_SECRET=<your_secret_key>"
echo "     - PORT=5000"
echo "     - NODE_ENV=production"
echo "   • Click Deploy"
echo "   • Copy your Railway URL"
echo ""

echo "3. VERCEL FRONTEND DEPLOYMENT"
echo "   • Go to: https://vercel.com"
echo "   • Connect GitHub account"
echo "   • Import this repository"
echo "   • Set root directory to: ./client"
echo "   • Build command: npm run build"
echo "   • Add environment variable:"
echo "     - VITE_API_URL=<your_railway_url>/api"
echo "   • Click Deploy"
echo ""

echo "4. TEST YOUR DEPLOYMENT"
echo "   • Visit your Vercel URL"
echo "   • Register an account"
echo "   • Create and complete a habit"
echo "   • Verify everything works"
echo ""

echo "📚 For detailed instructions, read: DEPLOYMENT_GUIDE.md"
echo "⚡ For quick start, read: QUICK_DEPLOY.md"
echo ""
echo "✨ Happy deploying!"
