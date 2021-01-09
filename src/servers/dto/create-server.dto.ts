import { ApiProperty } from "@nestjs/swagger";

export class CreateServerDto {

  @ApiProperty()
  readonly name: string
}
