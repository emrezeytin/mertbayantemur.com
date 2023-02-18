import React from "react"
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconShare,
} from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ShareButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <IconShare />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Paylaş</DialogTitle>
          <DialogDescription>
            <a
              href={`https://twitter.com/intent/tweet?text=${siteConfig.name}%20Linkler&url=${siteConfig.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-4 py-3 hover:bg-teal-100/10 dark:hover:bg-teal-800/10"
            >
              <IconBrandTwitter />
              <span>Twitter&apos;dan paylaş</span>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${siteConfig.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-4 py-3 hover:bg-teal-100/10 dark:hover:bg-teal-800/10"
            >
              <IconBrandFacebook />
              <span>Facebook&apos;tan paylaş</span>
            </a>
            <a
              href={`https://wa.me/?text=${siteConfig.url}%20Linkler`}
              className="flex items-center gap-2 rounded-md px-4 py-3 hover:bg-teal-100/10 dark:hover:bg-teal-800/10"
            >
              <IconBrandWhatsapp />
              <span>Whatsapp&apos;ten paylaş</span>
            </a>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
