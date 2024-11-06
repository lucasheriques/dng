import { socials } from "@/lib/constants";
import { XMLParser } from "fast-xml-parser";

export interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export async function getLatestArticles(): Promise<Article[]> {
  try {
    // Fetch the RSS feed
    const response = await fetch("https://newsletter.nagringa.dev/feed", {
      next: { revalidate: 86400 }, // Revalidate cache every 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed");
    }

    const xml = await response.text();

    // Parse XML
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });

    const result = parser.parse(xml);
    const items = result.rss.channel.item;

    // Map and return the last 3 articles
    return items.slice(0, 3).map((item: any) => ({
      title: item.title,
      link: item.link ?? socials.brNewsletter,
      pubDate: new Date(item.pubDate).toISOString(),
      description:
        item.description
          .replace(/<!\[CDATA\[|\]\]>/g, "") // Remove CDATA tags
          .replace(/<[^>]*>/g, "") // Remove HTML tags
          .slice(0, 200) + "...", // Truncate description
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
