import { Global, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigService } from "../config/config.service"
import { ConfigModule } from "../config/config.module"

@Global()
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useExisting: ConfigService,
    }),
  ],
})
export class DatabaseModule {
  static forFeature = TypeOrmModule.forFeature
}
