const Envs = ["staging", "production", "development"] as const;
export type Env = typeof Envs[number];

function getEnv(): Env {
  if (isOfTypeEnv(process.env.NODE_ENV)) {
    return process.env.NODE_ENV as Env;
  } else {
    return "development";
  }
}

function isOfTypeEnv(typeEnvCandidate: string): typeEnvCandidate is Env {
  return (Envs as readonly string[]).includes(typeEnvCandidate);
}

export function getFrontendEndpoint(): string {
  if (AppEnv === "production") {
    return "https://test.xyz";
  } else {
    return "http://localhost:3000";
  }
}

export const AppEnv = getEnv();
