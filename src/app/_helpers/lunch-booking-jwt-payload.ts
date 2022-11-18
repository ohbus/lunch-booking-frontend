import { JwtPayload } from "jwt-decode";

export interface LunchBookingJwtPayload extends JwtPayload {
  id: string;
  atz: string;
}
