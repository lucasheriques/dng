export const secretsMap = {
  PosthogKey: new sst.Secret("PosthogKey"),
  PosthogHost: new sst.Secret("PosthogHost"),
  SelicRate: new sst.Secret("SelicRate"),
};

export const allSecrets = Object.values(secretsMap);
