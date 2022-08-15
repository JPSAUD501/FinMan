import { DateTime } from 'luxon'
import fastify from 'fastify'
import { AdvConsole } from '../Functions/advancedConsole'
const port = parseInt(process.env.PORT || '3000')
const host = process.env.HOST || '0.0.0.0'
const server = fastify({ logger: true })


export class Server {
  advConsole: AdvConsole

  constructor (advConsole: AdvConsole) {
    this.advConsole = advConsole
  }

  async start () {
    console.log('🟢 - Health Checker On!')

    server.get('/', (request, reply) => {
      reply.send(`[${DateTime.now().setZone('America/Sao_Paulo')}] TheFinManBot - Running!`)
    })

    server.get('/health', (request, reply) => {
      reply.status(200).send('OK')
    })

    server.listen({ port, host }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      this.advConsole.log(`Server listening at ${address}`)
    })
  }
}