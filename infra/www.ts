export const www = new sst.aws.Nextjs("www", {
  path: "packages/www",
  domain: {
    name:
      $app.stage === "production" ? "beta.nagringa.dev" : "dev.nagringa.dev",
    dns: sst.cloudflare.dns(),
  },
});
