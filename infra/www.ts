import { secretsMap } from "./secrets";
import { bucket } from "./storage";

export const www = new sst.aws.Nextjs("www", {
  path: "packages/www",
  domain: {
    name: $app.stage === "production" ? "nagringa.dev" : "staging.nagringa.dev",
    dns: sst.cloudflare.dns(),
  },
  link: [
    secretsMap.PosthogKey,
    secretsMap.PosthogHost,
    secretsMap.SelicRate,
    bucket,
  ],
  environment: {
    NEXT_PUBLIC_POSTHOG_KEY: secretsMap.PosthogKey.value,
    NEXT_PUBLIC_POSTHOG_HOST: secretsMap.PosthogHost.value,
  },
});
