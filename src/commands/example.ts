import { ISlackCommand } from "./types";
import { App } from '@slack/bolt';


export class ExampleCommand implements ISlackCommand {
    getName(): string {
        return "ExampleMessage";
    }

    async register(app: App): Promise<void> {
        app.command('/hello', async ({ command, ack, say }) => {
            await say(`안녕하세요, <@${command.user_id}> 님!`);
            await ack();
        });

        // TODO: hide this message into decorator
        console.log(`[COMMAND] Register ${this.getName()}`)
    }
}