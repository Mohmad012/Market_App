import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
//       authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       if (account.provider === 'google' &&
//           profile.verified_email === true &&
//           profile.email.endsWith('@gmail.com')) {
//         return true
//       } else {
//         return false
//       }
//     },
//   }
})
