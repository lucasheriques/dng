export const secretsMap = {
  PosthogKey: new sst.Secret("PosthogKey"),
  PosthogHost: new sst.Secret("PosthogHost"),
};

export const allSecrets = Object.values(secretsMap);
