const token = require("./private.json").telegram_token
const {Telegraf, Markup} = require('telegraf');
const bot = new Telegraf(token)
console.log("Start bot");

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('Задачи', async ctx =>{
  await ctx.reply('Кастомные кнопки', Markup.keyboard(
    [
      ['Выйти', 'Ячи'],
      ['Большая кнопка удачи']
    ]
  )
  .oneTime()
  .resize()
  )
  
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))