import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    color: z.enum([
      "orange",
      "green",
      "blue",
      "purple",
      "red",
      "dark-green",
      "yellow",
    ]),
    repo: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};
