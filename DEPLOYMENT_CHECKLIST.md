# Production Deployment Checklist

## Pre-Deployment

- [ ] All code committed to GitHub
- [ ] `.env` files are in `.gitignore`
- [ ] No secrets in source code
- [ ] Tested locally (npm run dev)
- [ ] Build succeeds locally (npm run build)

## MongoDB Atlas

- [ ] Account created
- [ ] Cluster deployed (M0 Sandbox)
- [ ] Database user created
- [ ] IP whitelist configured (0.0.0.0/0)
- [ ] Connection string copied
- [ ] MongoDB URI format verified

## Railway Backend

- [ ] Account created (GitHub authenticated)
- [ ] Repository connected
- [ ] Root directory set to `/server`
- [ ] Environment variables added:
  - [ ] MONGO_URI
  - [ ] JWT_SECRET (min 32 chars)
  - [ ] PORT=5000
  - [ ] NODE_ENV=production
- [ ] Deployment successful
- [ ] API URL copied
- [ ] Health check passed (GET /)
- [ ] Database connection verified

## Vercel Frontend

- [ ] Account created (GitHub authenticated)
- [ ] Repository imported
- [ ] Root directory set to `./client`
- [ ] Build command verified
- [ ] Environment variables added:
  - [ ] VITE_API_URL (Railway URL + /api)
- [ ] Deployment successful
- [ ] Frontend loads without errors
- [ ] API connection works

## Post-Deployment Testing

- [ ] Home page loads
- [ ] Register form works
- [ ] Create account successfully
- [ ] Login works
- [ ] Dashboard displays correctly
- [ ] Can create habit
- [ ] Can mark habit complete
- [ ] Data persists after refresh
- [ ] Can delete habit
- [ ] Can logout
- [ ] Mobile responsive
- [ ] No console errors

## Performance & Monitoring

- [ ] Check Vercel analytics
- [ ] Check Railway logs
- [ ] Monitor MongoDB storage
- [ ] Set up alerts (optional)
- [ ] Document API endpoints
- [ ] Test API with Postman
- [ ] Load testing (optional)

## Security

- [ ] Environment variables secure
- [ ] No hardcoded secrets
- [ ] CORS configured correctly
- [ ] HTTPS enforced
- [ ] MongoDB connection secure
- [ ] JWT secret is unique
- [ ] Error messages don't leak info
- [ ] Input validation on backend

## Documentation

- [ ] README.md updated
- [ ] DEPLOYMENT_GUIDE.md saved
- [ ] QUICK_DEPLOY.md saved
- [ ] API endpoints documented
- [ ] Environment variables documented
- [ ] Deployment steps recorded

## Go Live

- [ ] All tests passing
- [ ] All security checks passed
- [ ] Team review completed
- [ ] Backup of database taken
- [ ] Monitoring enabled
- [ ] Support plan ready
- [ ] Launch announcement ready

---

**Status:** Ready to Deploy ✅

Print this and check off each item before going live!
