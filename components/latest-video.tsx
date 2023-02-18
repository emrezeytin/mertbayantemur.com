import { useEffect, useState } from "react"
import Image from "next/image"

export function LatestVideo() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=1&playlistId=${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`

  useEffect(() => {
    setLoading(true)
    fetch(youtubeApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (!data || isLoading)
    return (
      <>
        <div
          role="status"
          className="flex aspect-video h-full max-w-[500px] animate-pulse items-center justify-center rounded-md bg-gray-300 dark:bg-gray-700"
        >
          <svg
            className="h-12 w-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 384 512"
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </svg>

          <span className="sr-only">Loading...</span>
        </div>
        <div className="mb-8 w-full p-4">
          <div className="mb-2 h-3 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-3 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </>
    )

  return (
    <div className="relative mb-8 overflow-hidden rounded-md bg-teal-900/10">
      <a
        href={`https://www.youtube.com/watch?v=${data.items[0].snippet.resourceId.videoId}?ref=https://mertbayantemur.com`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src={data.items[0].snippet.thumbnails.maxres.url}
          width={1280}
          height={720}
          alt={data.items[0].snippet.title}
          priority={true}
        />
        <h3 className="p-4 font-semibold leading-tight tracking-tight ">
          {data.items[0].snippet.title}
        </h3>
        <span className="absolute top-0 right-0 rounded-bl-sm bg-red-500 py-1 px-3 text-xs font-semibold uppercase">
          SON VİDEO
        </span>
      </a>
    </div>
  )
}
