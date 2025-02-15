class AppError extends Error {
  static PREFIX = "[ERROR]";

  constructor(message) {
    super(`\n${AppError.PREFIX} ${message}\n`);
    this.name = this.constructor.name;
  }
}

module.exports = AppError;
