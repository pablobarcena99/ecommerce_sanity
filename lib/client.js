import sanityClient from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "e4rt2pv3",
  dataset: "production",
  apiVersion: "2022-11-29",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});


const builder = imgUrlBuilder(client)

export const urlFor = (source) => builder.image(source)