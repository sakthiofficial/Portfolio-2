import { NextResponse } from "next/server";
import {
  ApiResponse,
  RESPONSE_MESSAGE,
  RESPONSE_STATUS,
  TOKEN_VARIABLES,
} from "./appConstants";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const apiUrlPath = request.nextUrl.pathname.startsWith("/api");
}
export const config = {
  matcher: [],
};
