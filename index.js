const { Telegraf, Markup } = require('telegraf');
const bot =new Telegraf('6198894191:AAGx_e6jZOValgR57XDESArDEVTdhEkzt8s');


const compliments =[
   'Ты восхитительный человек!',
   'Твой взгляд как солнечный лучик!',
   'Ты очень талантлив и креативен!',
   'Ты всегда умеешь поднять настроение!',
   'Ты прекрасный друг и заботливый человек!',
 ];
let currentCompliment = compliments [0];
function getDayOfWeek() {
  
    var date = new Date();
    
   
    var dayOfWeek = date.getDay();
    
   
    var daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
    
    return daysOfWeek[dayOfWeek];
  
  }
  
  
const keyboard= Markup.keyboard([
    ['День недели'],
  ['Сказать комплимент'],
  ['Покажи красивого человека'],
   ['Поменять комплимент']
]).resize().oneTime ();

bot.start((ctx) => {
  ctx.reply( 'Привет! я бот-комплиментатор. Вот мои команды:', keyboard)
});
bot.hears('День недели',(ctx)=>{
    ctx.reply('сегодня '+currentDayOfWeek,keyboard);
 
})
bot.hears ('Сказать комплимент', (ctx) => {
  ctx.reply(currentCompliment, keyboard);
 });
 bot. hears('Поменять комплимент', (ctx) =>{
  const randomIndex = Math.floor (Math.random()*compliments.length);
  currentCompliment = compliments [randomIndex];
  ctx.reply( 'Новый комплимент выбран!', keyboard);
 });
bot.launch();