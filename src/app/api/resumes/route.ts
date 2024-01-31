export function GET() {
  return Response.json({
    count: 2,
    resumes: [
      { id: 1, name: "Elon Musk", company: "X" },
      { id: 2, name: "Sundar Pichai", company: "Alphabet" },
    ],
  });
}
