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
    try {
      this.bot.sendLog(log);
    } catch (error) {
      console.log(error);
    }
  }
}