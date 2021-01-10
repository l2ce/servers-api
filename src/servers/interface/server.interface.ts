import { Document } from 'mongoose'

export interface IServer extends Document {
  readonly serverId: string
  readonly name: string
  readonly rate: string
  readonly chronicles: number
  readonly locale:string
  readonly dateStartZbt: Date
  readonly dateEndZbt: Date
  readonly dateStartObt: Date
  readonly dateEndObt: Date
  readonly dateStart: Date
  readonly dateEnd: Date
}
