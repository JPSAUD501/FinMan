import dotenv from 'dotenv';
dotenv.config();

export default {
  telegram: {
      token: process.env.TFMB_TELEGRAM_TOKEN || ''
  }
}