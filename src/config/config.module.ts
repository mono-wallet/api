import { Global, Module } from "@nestjs/common"
import { ConfigModule as NestConfigModule } from "@nestjs/config"
import typeOrmConfig from "./typeorm.config"
import { ConfigService } from "./config.service"

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [typeOrmConfig],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
