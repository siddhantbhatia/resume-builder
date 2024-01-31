export function GET() {
  return Response.json({
    count: 2,
    templates: [
      { id: 1, name: "John Doe", company: "ABC Company" },
      { id: 2, name: "Graphical (watermarked)", company: "XYZ Company" },
    ],
  });
}
