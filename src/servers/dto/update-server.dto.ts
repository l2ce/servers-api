import { ApiProperty } from "@nestjs/swagger";

export class UpdateServerDto {
  
  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly url: string

  @ApiProperty()
  readonly rating: number
}
