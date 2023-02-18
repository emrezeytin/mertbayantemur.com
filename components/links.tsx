import React from "react"
import { Link } from "@/types/supabase"

export function Links({ data }) {
  return (
    <ul>
      {data.map((link: Link) => (
        <li
          key={link.id}
          className="mt-4 flex items-center gap-1 rounded-md bg-teal-600 first:mt-0"
        >
          <a className="block w-full px-4 py-3" href={link.link}>{link.title}</a>
        </li>
      ))}
    </ul>
  )
}
