export function GET() {
  return Response.json({
    count: 2,
    templates: [
      { id: 1, name: "Standard HR" },
      { id: 2, name: "Graphical (watermarked)" },
    ],
  });
}
