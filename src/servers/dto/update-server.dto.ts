import { ApiProperty } from "@nestjs/swagger";

export class UpdateServerDto {
  
  @ApiProperty()
  readonly name: string
}
