
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env";
import { emailOTP } from "better-auth/plugins"
import { resend } from "./resend";
// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  plugins: [emailOTP({
    async sendVerificationOTP({ email, otp, type }) {
      const { data, error } = await resend.emails.send({
        from: 'Lms <onboarding@resend.dev>',
        to: [email],
        subject: "LMS OTP Verification",
        html: `<p>Your OTP for LMS is <strong>${otp}</strong></p>`
      });
    },
  })],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID!,
      clientSecret: env.GITHUB_CLIENT_SECRET!,
    },
  }
});