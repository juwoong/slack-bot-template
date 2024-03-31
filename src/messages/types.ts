import { App } from "@slack/bolt";

export interface ISlackMessageCommand {
    getName(): string;
    register(app: App): Promise<void>;
}
