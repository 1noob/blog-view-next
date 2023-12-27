import { allPages } from "contentlayer/generated";

export async function GET() {
  const max = 100; // max returned posts
  const latest = allPages[0];
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
          <feed xmlns="http://www.w3.org/2005/Atom">
          <title>Song</title>
          <subtitle>Web engineer</subtitle>
          <link href="https://song.jackey.love/atom" rel="self"/>
          <link href="https://song.jackey.love/"/>
          <updated>${latest.updated ? latest.updated : latest.published}</updated>
          <id>https://song.jackey.love/</id>
          <author>
            <name>Song</name>
            <email>song@jackey.love</email>
          </author>
      ${allPages
        .filter(({ draft }) => !draft)
        .slice(0, max)
        .reduce((acc, post) => {
          return `${acc}
          <entry>
            <id>${post._id}</id>
            <title>${post.title}</title>
            <description>${post.description}</description>
            <link href="https://blog.jackey.love/${post.slug}"/>
            <updated>${post.updated ? post.updated : post.published}</updated>
          </entry>`;
        }, "")}
    </feed>`,
      {
        headers: {
          "Content-Type": "application/atom+xml; charset=utf-8",
        },
      }
  );
}
