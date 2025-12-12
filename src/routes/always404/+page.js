import { error } from "@sveltejs/kit"

export const load = () => {
  error(404, "this error was thrown in /routes/always404");
}