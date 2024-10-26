import { redirect, RedirectType } from 'next/navigation'

export default function Home() {
  redirect("/HTML/index.htm", RedirectType.replace);
  return (
    <div></div>
  );
}
