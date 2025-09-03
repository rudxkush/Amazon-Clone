# Security Guidelines

## Environment Variables

This project uses environment variables to store sensitive Firebase configuration. 

### Setup Instructions:

1. Copy `.env.example` to `.env`
2. Replace the placeholder values with your actual Firebase project credentials
3. Never commit the `.env` file to version control

### Firebase Security:

- The `.env` file contains sensitive API keys and should never be shared publicly
- Make sure your Firebase security rules are properly configured
- Use Firebase Authentication for user management
- Implement proper data validation and sanitization

## Reporting Security Issues

If you discover a security vulnerability, please email the maintainer directly instead of opening a public issue.