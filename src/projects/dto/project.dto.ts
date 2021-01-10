import { ApiProperty } from "@nestjs/swagger";

export class ProjectDto {
  @ApiProperty({ example: 'Asterios', description: 'Имя сервера', required: false })
  readonly name: string|null
  
  @ApiProperty({ example: 'https://asterios.tm/', description: 'url адресс', required: false })
  readonly url: string

  @ApiProperty({ example: 10, description: 'Рейтинг сервера', required: false })
  readonly rating: number
}

export class ResponseProjectDto extends ProjectDto {
  @ApiProperty({ example: '5ff7924e6e38cc5932a3432d', description: 'id' })
  readonly _id: string
  @ApiProperty({ example: 0, description: 'version' })
  readonly __v: number
}
