import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type WorldDocument = World & Document

@Schema()
export class World {

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
  readonly dateEendZbt: Date
  
  @Prop({default: null})
  readonly dateStartObt: Date
  
  @Prop({default: null})
  readonly dateEndObt: Date
  
  @Prop({default: null})
  readonly dateStart: Date

  @Prop({default: null})
  readonly dateEnd: Date
}

export const Worldschema = SchemaFactory.createForClass(World)
