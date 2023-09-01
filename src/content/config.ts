import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    repo: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    date: z.date(),
    preview: z.string(),
    readingTime: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
