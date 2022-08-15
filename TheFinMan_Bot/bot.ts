import config from './config';
import { Telegraf } from 'telegraf';

export class TheFinManBot {
  bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(config.telegram.theFinManBot.token);

    console.log(`TheFinMan_Bot - Loaded`);
  }

  async start() {
    await this.bot.launch();

    console.log(`TheFinMan_Bot - Started`);

    process.once('SIGINT', () => this.bot.stop('SIGINT'))
    process.once('SIGTERM', () =>this.bot.stop('SIGTERM'))
  }

  async hear() {
    this.bot.command('start', ctx => {
      ctx.reply('Oi, eu sou o FinMan, o seu gestor financeiro virtual! Fui projetado para te ajudar a controlar seus gastos de forma fácil, rápida e principalmente privada!');
    })

    console.log(`TheFinMan_Bot - Listening`);
  }
}