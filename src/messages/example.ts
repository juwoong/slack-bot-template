import { ISlackMessageCommand } from "./types";
import { App, GenericMessageEvent } from '@slack/bolt';

export class ExampleMessage implements ISlackMessageCommand {
    getName(): string {
        return "ExampleMessage";
    }

    async register(app: App): Promise<void> {
        app.message('!hello', async ({ message, say }) => {
            const msg = message as GenericMessageEvent;
            await say(`안녕하세요, <@${msg.user}> 님!`);
        });

        // TODO: hide this message into decorator
        console.log(`[MESSAGE] Register ${this.getName()}`)
    }
}