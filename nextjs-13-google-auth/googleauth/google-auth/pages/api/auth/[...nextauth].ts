import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Initialize NextAuth

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "693445588443-vqdslbu8858ks4msp3j7fpud5k5n8l2m.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})