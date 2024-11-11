export async function GET() {
  try {
    // Your GET request handling logic here
    return Response.json({ bananas: "fruits" }, { status: 201 })
  } catch (error) {
    return Response.error()
  }
}
