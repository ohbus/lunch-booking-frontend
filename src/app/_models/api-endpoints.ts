export class ApiEndpoints {

  public static readonly LOGIN_USER_REGISTRATION = "/login/register";
  public static readonly LOGIN_USER = "/login";

  public static readonly LOGIN_OTP_VALIDATE = "/login/otp/validate";
  public static readonly LOGIN_OTP_RESEND = "/login/otp/resend";

  public static readonly FORGET_PASSWORD = "/login/forget";
  public static readonly FORGET_PASSWORD_NEW_PASSWORD = "/login/forget/new";

  public static readonly LOGIN_CHECK_USER_NAME = "/login/check/username";
  public static readonly LOGIN_CHECK_PHONE_NUMBER = "/login/check/phone";

  public static readonly LOGIN_CHANGE_PASSWORD = "/login/passwd";

  public static readonly MEAL_CREATE = "/meal/create";
  public static readonly MEAL_ACTIVATE = "/meal/activate";
  public static readonly MEAL_LOCK = "/meal/lock";
  public static readonly MEAL_READY = "/meal/ready";
  public static readonly MEAL_FOR_USERS = "/meal";
  public static readonly MEALS = "/meal";
  public static readonly MEAL_AVAILABLE = "/meal/available";
  public static readonly MEAL_COUNT = "/meal/count";

  public static readonly BOOKING_FOR_TODAY = "/booking";
  public static readonly BOOKING_PICK_UP = "/booking/pickup";
  public static readonly BOOKING_CREATE = "/booking/create";
  public static readonly BOOKING_AVAIL = "/booking/avail";
  public static readonly BOOKING_ID = "/booking";
  public static readonly BOOKING_FETCH_FOR_USER = "/booking/fetch";
  public static readonly BOOKINGS_BY_DATE = "/booking";

}
