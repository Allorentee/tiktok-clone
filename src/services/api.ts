import feed from '@/data/feed.json'
import { Feed } from '@/types/feed'

export const getAllVideos = (): Promise<Feed[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(feed.videos), 300)
  })
}
