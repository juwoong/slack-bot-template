import { App } from '@slack/bolt';
import { ExampleMessage } from './example';

export async function registerAll(app: App): Promise<void> {
    const registers = [
        new ExampleMessage(),
    ];

    // Register All commands
    await Promise.all(registers.map((it) => it.register(app)));
}