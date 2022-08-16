import { Telegraf } from "telegraf";
import { TheFinManLogBot } from "../TheFinManLog_Bot/bot";
import config from "../TheFinMan_Bot/config";

export class AdvConsole {
  bot: TheFinManLogBot;

  constructor (bot: TheFinManLogBot) {
    this.bot = bot;
  }

  log (log: any) {
    console.log(log);
    this.bot.sendLog(log);
  }

  error (error: any) {
    console.error(error);
    this.bot.sendError(error);
  }
}