import dotenv from 'dotenv';
dotenv.config();

export default {
  telegram: {
    theFinManBot: {
      token: process.env.TELEGRAM_TOKEN || '',
    }
  }
}