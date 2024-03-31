import { App } from '@slack/bolt';
import { ExampleCommand } from './example';

export async function registerAll(app: App): Promise<void> {
    const registers = [
        new ExampleCommand(),
    ];

    // Register All commands
    await Promise.all(registers.map((it) => it.register(app)));
}