import { ActionFunction, redirect } from "remix"
import { db } from "~/utils/db.server"

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const content = form.get("content")

  if (typeof name !== "string" || typeof content !== "string") throw new Error("Form not submitted correctly")
  
  const fields = { name, content }

  const joke = await db.joke.create({
    data: fields
  })

  return redirect(`/jokes/${joke.id}`)
}

export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own joke</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text name='name"/>
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content"/>
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}