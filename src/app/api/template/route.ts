import { type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return {};
  }

  const templateId = parseInt(id);

  if (templateId === 1) {
    return {};
  }
}
