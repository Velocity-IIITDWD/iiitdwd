# IIIT Dharwad CMS

This is the Content Management System for IIIT Dharwad built with Next.js and Sanity CMS.

## Features

- **Sanity Studio**: Content management interface at `/studio`
- **Deployment Management**: Deploy to production or beta environments
- **Authentication-Protected Deployments**: Only authenticated Sanity users can trigger deployments
- **Asset Management**: External link to asset management system

## Sanity Authentication for Deployments

### How it Works

The CMS implements proper Sanity Studio Mode authentication following the official SDK guide:

1. **Studio Authentication**: Users must first authenticate to Sanity Studio at `/studio`
2. **Token Storage**: Sanity Studio stores auth token in `localStorage` with key `__sanity_auth_token_${projectId}`
3. **Client-side Token Retrieval**: CMS reads the token from localStorage on the client
4. **Server-side Token Validation**: Token is sent to server and validated against Sanity's API
5. **Deploy Protection**: Deployment workflows require valid Sanity Studio token

### Authentication Flow

```
User → /studio (login) → Sanity Token in localStorage → CMS reads token → Server validates → Deploy Enabled
```

### Security Features

- ✅ **Proper Sanity Studio Mode**: Follows official SDK authentication patterns
- ✅ **Token-based validation**: Uses actual Sanity Studio tokens from localStorage
- ✅ **Server-side verification**: Validates tokens against Sanity's API before deployment
- ✅ **Client-side UI feedback**: Real-time authentication status display
- ✅ **Automatic auth checking**: Detects and validates tokens on page load
- ✅ **Error handling**: Clear guidance for authentication issues

### Setup

1. Navigate to `/studio` and authenticate with your Sanity account
2. Return to the main CMS page
3. The authentication status will be displayed at the top
4. Deploy buttons will be enabled once authenticated

### API Endpoints

- `POST /api/auth/sanity` - Validate Sanity Studio token (expects `{token: string}` in body)
- `GET /api/auth/sanity` - Returns unauthenticated (for backwards compatibility)
- Server actions handle deployment workflow triggering with token validation

### Technical Implementation

**Client-side Token Handling** (`/src/lib/sanity-client-auth.ts`):

- `getSanityStudioToken()` - Retrieves token from localStorage using pattern `__sanity_auth_token_${projectId}`
- `checkSanityAuthFromClient()` - Validates token with server via POST request

**Server-side Validation** (`/src/app/actions/sanity-auth.ts`):

- `validateSanityToken(token)` - Makes authenticated request to Sanity API to verify token
- `checkSanityAuthWithToken(token)` - Wrapper for token validation

**Deployment Protection** (`/src/app/actions/github.ts`):

- All deployment workflows require a valid `sanityToken` parameter
- Server validates token before executing any GitHub actions

### Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset (usually 'production')
- `DEPLOY_REPO_URL` - GitHub repository for deployment
- `DEPLOY_WORKFLOW` - Production deployment workflow
- `DEPLOY_STAGING_WORKFLOW` - Beta deployment workflow
- `DEPLOY_REF` - Git reference for deployment
- `GITHUB_PAT` - GitHub Personal Access Token

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Access Sanity Studio
http://localhost:3001/studio

# Access CMS interface
http://localhost:3001
```

### Deployment

The system supports two deployment environments:

- **Production**: Deploys to the main website
- **Beta**: Deploys to the staging environment

Both require Sanity Studio authentication before deployment can be triggered.
