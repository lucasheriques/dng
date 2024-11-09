const posthogKey = new sst.Secret("PosthogKey");
const posthogHost = new sst.Secret("PosthogHost");

export const www = new sst.aws.Nextjs("www", {
  path: "packages/www",
  domain: {
    name: $app.stage === "production" ? "nagringa.dev" : "staging.nagringa.dev",
    dns: sst.cloudflare.dns(),
  },
  link: [posthogKey, posthogHost],
});
