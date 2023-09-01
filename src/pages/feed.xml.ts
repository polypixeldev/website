import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

import type { APIContext } from "astro";

const parser = new MarkdownIt();

export async function get(context: APIContext) {
  const posts = await getCollection("posts");
  return rss({
    title: "polypixeldev's blog",
    description: "Just a place where I write about random things",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.name,
      pubDate: post.data.date,
      description: post.data.preview,
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
    stylesheet: "/rss/pretty-feed-v3.xsl",
  });
}
