/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "dng",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile:
            input?.stage === "production"
              ? "lucasfaria-prod"
              : "lucasfaria-dev",
        },
        cloudflare: true,
      },
    };
  },
  async run() {
    await import("./infra/storage");
    const api = await import("./infra/api");
    await import("./infra/www");
    return {
      api: api.myApi.url,
    };
  },
});
