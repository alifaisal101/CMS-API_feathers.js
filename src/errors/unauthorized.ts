import {  FeathersError } from "@feathersjs/errors";

export default class Unauthorized extends FeathersError {
  constructor(message: string) {
    super(
      message,
      "Unauthorized Request",
      403,
      "unauthorized-access-error",
      {}
    );
  }
}
