import { getCurrentUser } from "@/utils";
import LoginPage from "./LoginPage";
import { redirect } from "next/navigation";

export default  async function Page({ params }: any){
  const user = await getCurrentUser() as any
  if(user?.access_token){
    redirect('/dashboard/overview2')
  }
  return <LoginPage params={params}/>
}