// src/app/news/news-client.js
"use client";

import { Suspense } from "react";
import NewsHero from "../../components/news/newsHero";
import NewsCategories from "../../components/news/newsCategories";
import NewsTrending from "../../components/news/newsTrending";
import NewsGrid from "../../components/news/newsGrid";
import NewsNewsletter from "../../components/news/newsLetter";

/**
 * Client Component - handles all UI rendering
 * All data is passed from server component as props
 * No useSearchParams() here - everything comes from props
 */
export default function NewsPageClient({
  activeCategory,
  filteredArticles,
  heroArticles,
}) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Hero Section: Display the 3 latest articles */}
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse">
            <div className="text-gray-400 text-lg">Loading hero section...</div>
          </div>
        }
      >
        <NewsHero articles={heroArticles} />
      </Suspense>

      {/* Categories Section: Passes the current active category from props */}
      <Suspense
        fallback={
          <div className="py-16 flex items-center justify-center bg-white dark:bg-gray-800">
            <div className="text-gray-400 text-lg animate-pulse">
              Loading categories...
            </div>
          </div>
        }
      >
        <NewsCategories activeCategory={activeCategory} />
      </Suspense>

      {/* Trending Section */}
      <Suspense
        fallback={
          <div className="py-16 flex items-center justify-center">
            <div className="text-gray-400 text-lg animate-pulse">
              Loading trending news...
            </div>
          </div>
        }
      >
        <NewsTrending />
      </Suspense>

      {/* News Grid Section: Displays the server-filtered list of articles */}
      <Suspense
        fallback={
          <div className="py-16 flex items-center justify-center">
            <div className="text-gray-400 text-lg animate-pulse">
              Loading articles...
            </div>
          </div>
        }
      >
        <NewsGrid articles={filteredArticles} />
      </Suspense>

      {/* Newsletter Section */}
      <Suspense
        fallback={
          <div className="py-16 flex items-center justify-center">
            <div className="text-gray-400 text-lg animate-pulse">
              Loading newsletter...
            </div>
          </div>
        }
      >
        <NewsNewsletter />
      </Suspense>
    </main>
  );
}
