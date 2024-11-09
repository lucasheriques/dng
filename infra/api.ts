import { secretsMap } from "./secrets";
import { bucket } from "./storage";

export const myApi = new sst.aws.Function("MyApi", {
  url: true,
  link: [bucket, secretsMap.PosthogHost],
  handler: "packages/functions/src/api.handler",
});
