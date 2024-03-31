# Slack App Template

Slack bot application template using typescript and `@slack/bolt`.
Basically use socket mode.

## How to prepare

1. Make `config.yaml` file from `config.yaml.example`. 
2. Set `CONFIG_PATH` environment variable to result path of above file.
3. `pnpm start` to run.

## How to build & dockerize

For dockerize, you can use `Dockerfile` and `docker-compose.yaml` to build and deploy it.

Or, just run `pnpm run build`.

## How to improvement

You can add new command into `src/commands` or `src/messages`.
Each folder means different type of command.


