import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { ServerDto } from "../dto/server.dto";

export type ServerDocument = Server & Document<ServerDto>

@Schema()
export class Server {

  @Prop({default: null})
  readonly serverId: string

  @Prop({default: null})
  readonly name: string
  
  @Prop({default: null})
  readonly rate: string

  @Prop({default: null})
  readonly chronicles: number

  @Prop({default: null})
  readonly locale: string

  @Prop({default: null})
  readonly dateStartZbt: Date

  @Prop({default: null})
  readonly dateEndZbt: Date
  
  @Prop({default: null})
  readonly dateStartObt: Date
  
  @Prop({default: null})
  readonly dateEndObt: Date
  
  @Prop({default: null})
  readonly dateStart: Date

  @Prop({default: null})
  readonly dateEnd: Date
}

export const ServerSchema = SchemaFactory.createForClass(Server)
