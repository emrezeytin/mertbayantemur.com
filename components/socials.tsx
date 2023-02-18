import React from "react"
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react"

import { Link } from "@/types/supabase"

const socialIcons = {
  youtube: <IconBrandYoutube />,
  instagram: <IconBrandInstagram />,
  tiktok: <IconBrandTiktok />,
}

export function Socials({ data }) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      {data.map((social: Link) => (
        <a
          href={social.link}
          key={social.id}
          aria-label={social.title}
          className="flex items-center gap-1 rounded-md bg-teal-600 p-2"
        >
          {socialIcons[social.key]}
          {social.key === "youtube" ? (
            <span className="text-sm">{social.title}</span>
          ) : null}
        </a>
      ))}
    </div>
  )
}
