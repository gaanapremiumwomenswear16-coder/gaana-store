export async function GET() {
  return Response.json([
    {
      id: "1",
      name: "Floral Summer Dress",
      price: 2499,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
    },
    {
      id: "2",
      name: "Pastel Mini Dress",
      price: 1999,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    }
  ]);
}