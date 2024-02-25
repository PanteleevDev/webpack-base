import { Configuration } from "webpack";
import { ConfigEnv } from "../types";

export const resolver = (env: ConfigEnv): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": "./src",
    },
  };
};
