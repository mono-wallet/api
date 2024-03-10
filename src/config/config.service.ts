import { Injectable } from "@nestjs/common"
import { ConfigService as NestConfigService } from "@nestjs/config"
import { TypeOrmOptionsFactory } from "@nestjs/typeorm"
import typeOrmConfig from "./typeorm.config"

@Injectable()
export class ConfigService
  extends NestConfigService
  implements TypeOrmOptionsFactory
{
  createTypeOrmOptions() {
    return typeOrmConfig()
  }
}
