import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type ServerDocument = Server & Document

@Schema()
export class Server {

  @Prop()
  name: string

  @Prop()
  url: string
  
  @Prop()
  rating: number
}

export const ServerSchema = SchemaFactory.createForClass(Server)
