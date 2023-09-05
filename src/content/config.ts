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

export const collections = {
  projects: projectsCollection,
};
