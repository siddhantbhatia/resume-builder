import { type NextRequest } from "next/server";
import { template1 } from "./data1";
import { template2 } from "./data2";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return new Response(`Missing query param`, {
      status: 400,
    });
  }

  const templateId = parseInt(id);

  if (templateId === 1) {
    return Response.json(template1);
  } else {
    return Response.json(template2);
  }
}
