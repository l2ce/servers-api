import { ApiProperty } from "@nestjs/swagger";

export class CreateServerDto {

  @ApiProperty()
  readonly name: string
  
  @ApiProperty()
  readonly url: string

  @ApiProperty()
  readonly rating: number

  @ApiProperty()
  readonly wordls
}
