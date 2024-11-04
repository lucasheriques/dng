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
