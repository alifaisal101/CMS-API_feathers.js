// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import { Hook, HookContext } from "@feathersjs/feathers";

import Unauthorized from "./../errors/unauthorized";

type Options = {
  reqPrivilege: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options: Options): Hook => {
  return async (context: HookContext): Promise<HookContext> => {

    // Checks wheather the user privileges include the privilege required BEFORE the CRUD action
    if (!context.params.user?.privileges.includes(options.reqPrivilege)) {
      // send a 403 unauthorized error to the user
      const unauthorized = new Unauthorized(
        "The correct perrmissions to perform this action are unavailable."
      );
      return Promise.reject(unauthorized);
    }

    return context;
  };
};
