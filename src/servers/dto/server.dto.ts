import { ApiProperty } from "@nestjs/swagger";

export class ServerDto {
  @ApiProperty({ example: '22', description: 'id сервера' })
  readonly serverId: string

  @ApiProperty({ example: 'Phoenix', description: 'Имя сервера' })
  readonly name: string
  
  @ApiProperty({ example: '5', description: 'рейт сервера x5, x7, x50' })
  readonly rate: string

  @ApiProperty({ example: 'High-Five', description: 'Хроники сервера' })
  readonly chronicles: number

  @ApiProperty({ example: 'ru-RU', description: 'Язык сервера' })
  readonly locale:string

  @ApiProperty({ example: 'Wed Dec 19 2012 01:03:25 GMT-0500', description: 'Дата старта ЗБТ' })
  readonly dateStartZbt: Date

  @ApiProperty({ example: 'Wed Dec 19 2012 01:03:25 GMT-0500', description: 'Дата окончания ЗБТ' })
  readonly dateEndZbt: Date
  
  @ApiProperty({ example: 'Wed Dec 19 2012 01:03:25 GMT-0500', description: 'Дата старта ОБТ' })
  readonly dateStartObt: Date
  
  @ApiProperty({ example: 'Wed Dec 19 2012 01:03:25 GMT-0500', description: 'Дата окончания ОБТ' })
  readonly dateEndObt: Date
  
  @ApiProperty({ example: 'Wed Dec 19 2012 01:03:25 GMT-0500', description: 'Дата старта сервера' })
  readonly dateStart: Date

  @ApiProperty({ example: 'Wed Dec 19 2012 01:03:25 GMT-0500', description: 'Дата закрытия/слияния сервера' })
  readonly dateEnd: Date
}

export class ResponseServerDto extends ServerDto {
  @ApiProperty({ example: '5ff7924e6e38cc5932a3432d', description: 'id' })
  readonly _id: string
  @ApiProperty({ example: 0, description: 'version' })
  readonly __v: number
}
