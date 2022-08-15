import dotenv from 'dotenv';
dotenv.config();

export default {
  telegram: {
      token: process.env.TFMLB_TELEGRAM_TOKEN || '',
      logChannel: '-1001627211303'
  }
}