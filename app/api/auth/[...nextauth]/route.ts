import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { users } from "@/lib/users"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "*****",
                }
            },
            async authorize(credentials) {
                try {
                    console.log("Authorize called with:", credentials?.email); // Debug log

                    if (!credentials?.email || !credentials?.password) {
                        console.log("Missing credentials"); // Debug log
                        return null
                    }

                    // Check if user exists and password matches
                    const user = users[credentials.email]
                    if (user && user.password === credentials.password) {
                        console.log("Authentication successful for:", credentials.email); // Debug log
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                        }
                    }

                    console.log("Authentication failed for:", credentials.email); // Debug log
                    return null
                } catch (error) {
                    console.error("Authorize error:", error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/onBoardingScreens/signin",
    },
    callbacks: {
        async jwt({ token, user }) {
            try {
                console.log("JWT callback:", { token, user }); // Debug log
                if (user) {
                    token.id = user.id
                }
                return token
            } catch (error) {
                console.error("JWT callback error:", error);
                return token;
            }
        },
        async session({ session, token }) {
            try {
                console.log("Session callback:", { session, token }); // Debug log
                if (token) {
                    session.user.id = token.id as string
                }
                return session
            } catch (error) {
                console.error("Session callback error:", error);
                return session;
            }
        },
    },
    session: {
        strategy: "jwt",
    },
    debug: true, // Enable debug mode
})

export { handler as GET, handler as POST } 