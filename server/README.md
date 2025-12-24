# Email API Server

Backend server for handling contact form submissions and sending emails.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure email settings:
   - Copy `.env.example` to `.env`
   - Configure one of the email options below

## Email Configuration Options

### Option 1: Gmail (Recommended)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings > Security > 2-Step Verification > App passwords
   - Generate a password for "Mail"
3. Add to `.env`:
```
GMAIL_USER=cybersecure8@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here
```

### Option 2: Custom SMTP Server
Add to `.env`:
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

### Option 3: Ethereal Email (Development/Testing)
Leave `ETHEREAL_USER` and `ETHEREAL_PASS` empty in `.env` - the server will auto-generate test credentials.

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001` by default.

## API Endpoints

### POST /api/contact/send-email
Sends an email from the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I have a question...",
  "to": "cybersecure8@gmail.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "..."
}
```

### GET /api/health
Health check endpoint.

## Frontend Integration

The frontend is configured to use this API server. Make sure:
1. The server is running on port 3001 (or update `VITE_API_BASE_URL` in frontend `.env`)
2. CORS is enabled (already configured)

