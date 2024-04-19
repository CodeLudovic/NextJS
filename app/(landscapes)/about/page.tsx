import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Codeludovic',
 description: 'Codeludovic Demo',
 authors: [{name: 'Codeludovic', url: 'codeludovic.vercel.app'}],
 keywords: ['codeludovic', 'codeludovic.vercel.app', 'next.js', 'typescript', 'developer']
};
export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span> 
  ) 
}
