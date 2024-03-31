import { App } from "@slack/bolt";
import { getConfig, Config } from "./config";
import { registerAll as registAllCommands } from './commands';
import { registerAll as registAllMessages } from './messages';

async function app() {
    const config: Config = getConfig();

    const app = new App({
        signingSecret: config.slack.signingSecret,
        token: config.slack.botToken,
        appToken: config.slack.appToken,
        socketMode: true,
    });

    await registAllCommands(app);
    await registAllMessages(app);
    
    app.start(config.port);
}

app().then();