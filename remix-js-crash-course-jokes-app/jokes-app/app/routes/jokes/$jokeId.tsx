import { Link, LoaderFunction, useLoaderData } from "remix"
import { db } from "~/utils/db.server"
import { Joke } from "@prisma/client";

type LoaderData = { joke: Joke }

export const loader: LoaderFunction = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  })

  if (!joke) throw new Error("Joke not found")
  const data: LoaderData = { joke };
  return data
}

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <p>Here's your joke:</p>
      <p>
        {data.joke.content}
      </p>
      <Link to=".">{data.joke.name} Permalink</Link>
    </div>
  )
}