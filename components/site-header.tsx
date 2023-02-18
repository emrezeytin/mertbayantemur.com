import { siteConfig } from "@/config/site"
import { ShareButton } from "./share-button"
import { Socials } from "./socials"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function SiteHeader({ socials }) {
  return (
    <header className="container mx-auto mb-12 max-w-[500px]">
      <div className="mb-6 flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={siteConfig.image} />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="mb-1 text-xl font-bold leading-tight text-neutral-900 dark:text-neutral-100 md:text-2xl">
              {siteConfig.name}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {siteConfig.description}
            </p>
          </div>
        </div>
        <ShareButton />
      </div>
      <Socials data={socials} />
    </header>
  )
}
