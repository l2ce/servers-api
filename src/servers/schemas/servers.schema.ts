import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type ServerDocument = Server & Document

@Schema()
export class Server {

  @Prop({default: null})
  name: string|null

  @Prop({default: null})
  url: string|null
  
  @Prop({default: 0})
  rating: number
}

export const ServerSchema = SchemaFactory.createForClass(Server)
