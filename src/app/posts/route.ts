import { data } from "./data";

export async function GET() {
  return Response.json(data);
}
export async function POST(req: Request) {
  const post = await req.json();
  const newPost = {
    id: data.length + 1,
    ...post,
  };

  data.push(newPost);
  return Response.json(newPost, {
    status: 201,
  });
}
