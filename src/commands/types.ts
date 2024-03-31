import { App } from "@slack/bolt";

export interface ISlackCommand {
    getName(): string;
    register(app: App): Promise<void>;
}
