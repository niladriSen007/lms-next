import arcjet, { detectBot, fixedWindow, slidingWindow, protectSignup, sensitiveInfo, shield } from "@arcjet/next"
import { env } from "./env"
export { detectBot, fixedWindow, slidingWindow, protectSignup, sensitiveInfo, shield }

export const aj = arcjet({
  key: env?.ARCJET_KEY,
  characteristics: ["fingerprint"],
  rules: [
    shield({
      mode: "LIVE"
    })
  ]
})