import * as process from "process"

export abstract class Environment {
  static get isProduction() {
    return process.env.NODE_ENV == "production"
  }

  static get isStaging() {
    return process.env.NODE_ENV == "staging"
  }

  static get isLocal() {
    return process.env.NODE_ENV == "local"
  }

  static get isTest() {
    return process.env.NODE_ENV == "test"
  }

  static get isDebugMode() {
    return !!process.env.DEBUG
  }
}
