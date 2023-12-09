import { CookieValueTypes, getCookie } from "cookies-next";

// Get Cookie Value
// Get Cookie Value Type Id
export const StepsUserTypeId: CookieValueTypes =
  getCookie("steps_user_type_id") === undefined
    ? ""
    : getCookie("steps_user_type_id");
// Get Cookie Value Type Name
export const StepsUserTypeName: CookieValueTypes =
  getCookie("steps_user_type_name") === undefined
    ? ""
    : getCookie("steps_user_type_name");
// Get Cookie Value Token
export const StepsToken: CookieValueTypes =
  getCookie("steps_token") === undefined ? "" : getCookie("steps_token");
