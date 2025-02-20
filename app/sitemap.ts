import { allPages } from "contentlayer/generated";

export default async function sitemap() {
  const pages = allPages
    .filter(({ draft }) => !draft)
    .map((page) => ({
      url: `https://song.jackey.love/${page.slug}`,
      lastModified: page.updated || page.published,
    }));

  const routes = [""].map((route) => ({
    url: `https://song.jackey.love${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...pages];
}
