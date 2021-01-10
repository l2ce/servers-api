
import { ApiProperty } from "@nestjs/swagger";

export class WorldDto {
  @ApiProperty({default: null})
  readonly serverId: string

  @ApiProperty({default: null})
  readonly name: string
  
  @ApiProperty({default: null})
  readonly rate: string

  @ApiProperty({default: null})
  readonly chronicles: number

  @ApiProperty({default: null})
  readonly locale:string

  @ApiProperty({default: null})
  readonly dateStartZbt: Date

  @ApiProperty({default: null})
  readonly dateEndZbt: Date
  
  @ApiProperty({default: null})
  readonly dateStartObt: Date
  
  @ApiProperty({default: null})
  readonly dateEndObt: Date
  
  @ApiProperty({default: null})
  readonly dateStart: Date

  @ApiProperty({default: null})
  readonly dateEnd: Date
}
