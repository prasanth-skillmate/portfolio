# Email Functionality Setup Guide

This guide will help you set up email functionality for the contact form.

## Quick Start

### Option 1: Backend API Server (Recommended)

1. **Navigate to server directory:**
```bash
cd server
```

2. **Install dependencies (if not already installed):**
```bash
npm install
```

3. **Configure email settings:**
   - Copy `.env.example` to `.env` (if it exists) or create a `.env` file
   - Add your email configuration (see options below)

4. **Start the server:**
```bash
npm start
# or for development with auto-reload:
npm run dev
```

5. **The server will run on `http://localhost:3001`**

### Option 2: EmailJS (Alternative)

If you prefer not to run a backend server, you can use EmailJS:

1. **Sign up for EmailJS:** https://www.emailjs.com/
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Add environment variables to your frontend `.env` file:**
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Email Configuration Options

### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated password
3. **Add to `server/.env`:**
```
GMAIL_USER=cybersecure8@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=3001
```

### Custom SMTP Server

Add to `server/.env`:
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
PORT=3001
```

### Development/Testing (Ethereal Email)

For testing, you can use Ethereal Email (auto-generates test credentials):
- Leave `ETHEREAL_USER` and `ETHEREAL_PASS` empty in `.env`
- The server will automatically create test credentials
- Check the console output for login details

## Frontend Configuration

The frontend is already configured to use the backend API. Make sure:

1. **Backend server is running** on port 3001 (or update `VITE_API_BASE_URL` in frontend `.env`)
2. **CORS is enabled** (already configured in the server)

To change the API URL, create a `.env` file in the root directory:
```
VITE_API_BASE_URL=http://localhost:3001
```

## Testing

1. **Start the backend server:**
```bash
cd server
npm start
```

2. **Start the frontend:**
```bash
npm run dev
```

3. **Fill out the contact form** on your website
4. **Check your email** (cybersecure8@gmail.com) for the message

## Troubleshooting

### "Unable to connect to email server"
- Make sure the backend server is running on port 3001
- Check that `VITE_API_BASE_URL` matches your server URL

### "Failed to send email"
- Verify your email credentials in `server/.env`
- For Gmail, make sure you're using an App Password, not your regular password
- Check the server console for detailed error messages

### CORS Errors
- The server already has CORS enabled
- Make sure the frontend URL is allowed (currently allows all origins)

## Production Deployment

For production:

1. **Set environment variables** on your hosting platform
2. **Use a production email service** (SendGrid, Mailgun, AWS SES, etc.)
3. **Update `VITE_API_BASE_URL`** to your production API URL
4. **Enable HTTPS** for both frontend and backend
5. **Set `NODE_ENV=production`** in your server environment

## Security Notes

- Never commit `.env` files to version control
- Use App Passwords for Gmail instead of your main password
- Consider using environment variables provided by your hosting platform
- Enable rate limiting in production to prevent spam

