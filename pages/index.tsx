import { supabase } from "@/lib/client"
import { LatestVideo } from "@/components/latest-video"
import { Layout } from "@/components/layout"
import { Links } from "@/components/links"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage({ socials, links }) {
  return (
    <Layout>
      <SiteHeader socials={socials} />
      <main className="container mx-auto max-w-[500px]">
        <LatestVideo />
        <Links data={links} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data: socials } = await supabase
    .from("socials")
    .select("*")
    .order("id", { ascending: true })
  const { data: links } = await supabase
    .from("links")
    .select("*")
    .order("id", { ascending: true })

  return {
    props: {
      socials: socials,
      links: links,
    },
  }
}
