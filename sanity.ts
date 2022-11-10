import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2021-10-21',
}

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

export const urlFor = (source: any): ImageUrlBuilder => {
  return createImageUrlBuilder(config).image(source)
}
