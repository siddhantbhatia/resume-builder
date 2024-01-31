export function GET() {
  return Response.json({
    count: 2,
    templates: [
      { id: 1, name: "Standard HR", layout: "Solid Header" },
      { id: 2, name: "Graphical (watermarked)", layout: "Graphical" },
      { id: 3, name: "Company ABC (watermarked)", layout: "Two Column" },
    ],
  });
}
