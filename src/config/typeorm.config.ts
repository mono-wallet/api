import { registerAs } from "@nestjs/config"
import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import * as process from "process"
import { SnakeNamingStrategy } from "typeorm-naming-strategies"
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"
import { Environment } from "./environment"
import { LogLevel } from "typeorm"

export const dataSourceConfig = registerAs(
  "typeorm:data_source",
  (): PostgresConnectionOptions => ({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    namingStrategy: new SnakeNamingStrategy(),
    logging: Environment.isProduction
      ? ["error", "warn"]
      : [
          "error",
          "warn",
          "info",
          "log",
          ...(Environment.isDebugMode
            ? <LogLevel[]>["query", "schema", "migration"]
            : []),
        ],
    synchronize: Environment.isLocal,
  }),
)

export const typeOrmConfig = registerAs(
  "typeorm",
  (): TypeOrmModuleOptions => ({
    ...dataSourceConfig(),
    autoLoadEntities: true,
  }),
)

export default typeOrmConfig
