import fs from 'fs';
import yaml from 'js-yaml';

export interface SlackConfig {
    signingSecret: string;
    botToken: string;
    appToken: string;
}

export interface Config {
    port: number;
    slack: SlackConfig;
}

export function getConfig(): Config {
    const path = process.env.CONFIG_PATH || `${process.cwd()}/config.yaml`;
    const configFile = yaml.load(fs.readFileSync(path, 'utf-8'));

    return configFile as Config;
}