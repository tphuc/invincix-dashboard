import { redirect } from "next/navigation";
export default async function Page() {
  redirect('/login')

  return <div>redirecting...</div>;
}
