// src/components/news/newsCategories.js
"use client";

import { useSlideIn, useStaggerAnimation } from "@/animation/aboutAnimate";
import { useRouter, usePathname } from "next/navigation";
import { allNewsArticles } from "@/data/index";

/**
 * Calculate categories and counts from data
 */
const getCategoriesWithCounts = () => {
  const categoryMap = allNewsArticles.reduce((acc, article) => {
    const category = article.category || "General";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const dynamicCategories = Object.keys(categoryMap).map((name) => ({
    name,
    count: categoryMap[name],
    icon: getCategoryIcon(name),
  }));

  const totalCount = allNewsArticles.length;

  return [
    { name: "All", icon: "📰", count: totalCount },
    ...dynamicCategories.filter((c) => c.name !== "All"),
  ];
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "Technology":
      return "💻";
    case "Science":
      return "🔬";
    case "Business":
      return "💼";
    case "Environment":
      return "🌱";
    case "Politics":
      return "🏛️";
    case "Health":
      return "🏥";
    case "Sports":
      return "⚽";
    default:
      return "💡";
  }
};

/**
 * NewsCategories - receives activeCategory as prop (no useSearchParams)
 */
const NewsCategories = ({ activeCategory }) => {
  const router = useRouter();
  const pathname = usePathname();
  const categories = getCategoriesWithCounts();

  const [titleRef, titleStyle] = useSlideIn("up", 200);
  const [categoriesRef, visibleItems] = useStaggerAnimation(
    categories.length,
    100
  );

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "All") {
      router.push(pathname, { scroll: false });
    } else {
      router.push(`${pathname}?category=${categoryName}`, { scroll: false });
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} style={titleStyle} className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Browse by Category
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Find news that matters to you
          </p>
        </div>

        <div
          ref={categoriesRef}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              aria-current={activeCategory === category.name ? "true" : "false"}
              className={`group relative p-4 sm:p-6 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ${
                index < visibleItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                activeCategory === category.name
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl ring-4 ring-blue-500/50 dark:ring-blue-400/30"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${
                  activeCategory !== category.name &&
                  "group-hover:opacity-100 bg-blue-500/10 dark:bg-blue-300/10"
                }`}
              />

              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div
                  className={`text-2xl sm:text-3xl mb-3 transform transition-transform duration-300 ${
                    activeCategory === category.name
                      ? "text-white"
                      : "text-blue-500 dark:text-blue-300 group-hover:scale-110"
                  }`}
                >
                  {category.icon}
                </div>
                <h3
                  className="font-semibold mb-1 text-sm md:text-base text-center line-clamp-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {category.name}
                </h3>
                <span
                  className={`text-xs opacity-75 ${
                    activeCategory === category.name
                      ? "text-white/80"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {category.count} articles
                </span>
              </div>

              {activeCategory === category.name && (
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-3 h-3 text-yellow-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
