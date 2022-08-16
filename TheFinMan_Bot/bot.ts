import config from './config';
import { Markup, Telegraf } from 'telegraf';
import { AdvConsole } from '../Functions/advancedConsole';

export class TheFinManBot {
  advConsole: AdvConsole;
  bot: Telegraf;

  constructor(advConsole: AdvConsole) {
    this.advConsole = advConsole;
    this.bot = new Telegraf(config.telegram.token);

    console.log(`TheFinMan_Bot - Loaded`);
  }

  async start() {
    await this.bot.launch();

    this.advConsole.log(`TheFinMan_Bot - Started`);

    process.once('SIGINT', () => this.bot.stop('SIGINT'))
    process.once('SIGTERM', () =>this.bot.stop('SIGTERM'))
  }

  async hear() {
    this.bot.command('start', ctx => {
      ctx.reply('Oi, eu sou o FinMan, o seu gestor financeiro virtual! Fui projetado para te ajudar a controlar seus gastos de forma fácil, rápida e principalmente privada! Para saber mais sobre como mantemos suas informações seguras, utilize o comando /privacidade.');
    })

    this.bot.command('privacidade', ctx => {
      ctx.reply('O FinMan é um software livre, gratuito e de código aberto que não armazena nenhuma informação pessoal alem do email do comprador e o ID do grupo do Telegram vinculado a ele. Todos seus gastos são armazenados em uma planilha online de sua propriedade em você pode a qualquer momento impedir que eu leia ou edite a mesma. O Telegram usa criptografia para garantir que ninguém além dos integrantes do grupo leiam suas mensagens!\n\nSaiba mais usando os botoes abaixo!', {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([
          Markup.button.url('Código Aberto', 'https://pt.wikipedia.org/wiki/Software_de_c%C3%B3digo_aberto'),
          Markup.button.url('Segurança Telegram', 'https://telegram.org/faq#p-quao-seguro-e-o-telegram'),
          Markup.button.url('Código fonte do FinMan', 'https://github.com/JPSAUD501/FinMan')
        ])
      });
    })

    this.advConsole.log(`TheFinMan_Bot - Listening`);
  }
}