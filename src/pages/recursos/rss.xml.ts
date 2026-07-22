import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const recursos = await getCollection("recursos");

  return rss({
    title: "Arqui-Médica | Recursos Técnicos",
    description:
      "Guías, artículos y recursos sobre instalaciones hospitalarias, normativa NOM, gases medicinales y climatización grado médico.",
    site: context.site,
    items: recursos.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.datePublished,
      link: `/recursos/${entry.id}/`,
    })),
    customData: "<language>es-mx</language>",
  });
}
