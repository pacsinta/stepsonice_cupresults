import { redirect, RedirectType } from 'next/navigation'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  redirect("/HTML/index.htm", RedirectType.replace);
  return (
    <div></div>
  );
}
