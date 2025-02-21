export class ApiErrorException<T> extends Error {
  data: T;

  constructor(message: string, data: T) {
    super(message);
    this.name = "ApiErrorException";
    this.data = data;
  }
}
