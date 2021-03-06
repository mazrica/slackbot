import { App } from '@slack/bolt'

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
})

app.event('app_home_opened', async ({ event, say }) => {
  say(`hello world, <@${event.user}>!`)
})

const run = async () => {
  await app.start(process.env.PORT || 3000)
  console.log('⚡️ Bolt app is running!')
}

run()
