
require('dotenv').config();

const { Bot } = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('TELEGRAM_BOT_TOKEN is missing from .env');
  process.exit(1);
}

// Create bot
const bot = new Bot(token);

// /start command
bot.command('start', (ctx) => {
  return ctx.reply(
    'AI Dev Team is online. Send /help to see commands.'
  );
});

// /help command
bot.command('help', (ctx) => {
  return ctx.reply(`
Available commands:

/start - Start the bot
/help - Show available commands
/ping - Check bot status
`);
});

// /ping command
bot.command('ping', (ctx) => {
  return ctx.reply('Bot is online.');
});

// Handle errors
bot.catch((error) => {
  console.error('Bot error:', error);
});

// Start polling
async function startBot() {
  try {
    console.log('Starting AI Dev Team Telegram bot...');
    await bot.startPolling();
  } catch (error) {
    console.error('Failed to start bot:', error);
    process.exitCode = 1;
  }
}

startBot();
