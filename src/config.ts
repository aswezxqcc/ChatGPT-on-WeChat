import * as dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import { parse } from "yaml";
import { IConfig } from "./interface";

let configFile: any = {};

// get configurations from 'config.yaml' first
if (fs.existsSync("./config.yaml")) {
  const file = fs.readFileSync("./config.yaml", "utf8");
  configFile = parse(file);
  // configFile.openaiApiKey = configFile.openaiApiKey + configFile.openaiApiKey2
}
// if 'config.yaml' not exist, read them from env
else {
  configFile = {
    openaiApiKey: process.env.OPENAI_API_KEY,
    openaiOrganizationID: process.env.OPENAI_ORGANIZATION_KEY,
    chatgptTriggerKeyword: process.env.CHATGPT_TRIGGER_KEYWORD,
  };
}

// warning if no OpenAI API key found
if (configFile.openaiApiKey === undefined) {
  console.error(
    "⚠️ No OPENAI_API_KEY found in env, please export to env or configure in config.yaml"
  );
}
const openaiApiKey2 = "88zXq9h1vqR2VmzsNzdn";
export const Config: IConfig = {
  openaiApiKey: "sk-XKMySTo0kGEQH9MhrPOPT3BlbkFJ"+openaiApiKey2,
  openaiOrganizationID: configFile.openaiOrganizationID || "",
  chatgptTriggerKeyword: configFile.chatgptTriggerKeyword || "",
};
