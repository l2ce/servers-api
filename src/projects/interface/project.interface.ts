import { Document } from 'mongoose'

export interface IProject extends Document {
  readonly name: string
  readonly url: string
  readonly rating: number
  readonly dateStart: Date
  readonly dateEnd: Date
}
