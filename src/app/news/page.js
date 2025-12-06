// src/app/news/page.js
import { Suspense } from "react";
import { getNewsArticlesByCategory, getLatestNewsArticles } from "@/data/index";
import NewsPageClient from "./news-client";

/**
 * Server Component - handles data fetching only
 * No client-side hooks here
 */
export default async function NewsPage({ searchParams }) {
  // Safely await and extract searchParams
  const resolvedParams = await Promise.resolve(searchParams);
  const activeCategory = resolvedParams?.category || "All";

  // Fetch all data server-side
  const filteredArticles =
    activeCategory === "All"
      ? getLatestNewsArticles(100)
      : getNewsArticlesByCategory(activeCategory);

  const heroArticles = getLatestNewsArticles(3);

  // Pass everything to client component as props
  return (
    // 💥 WRAP THE ENTIRE CLIENT COMPONENT HERE 💥
    <Suspense>
      <NewsPageClient
        activeCategory={activeCategory}
        filteredArticles={filteredArticles}
        heroArticles={heroArticles}
      />
    </Suspense>
    // Note: We don't need a fallback here because the fallback for all
    // components is already defined inside NewsPageClient.
  );
}
