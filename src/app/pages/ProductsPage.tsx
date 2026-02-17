import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Category = "All" | "Beverages" | "Dairy" | "Cereals" | "Confectionery" | "Culinary";

interface Product {
  id: number;
  name: string;
  category: Category;
  tagline: string;
  image: string;
}

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories: Category[] = [
    "All",
    "Beverages",
    "Dairy",
    "Cereals",
    "Confectionery",
    "Culinary",
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "NESCAFÉ Classic",
      category: "Beverages",
      tagline: "Start your day with rich coffee",
      image: "https://images.unsplash.com/photo-1657047698672-cbf2fd464d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZXZlcmFnZSUyMGN1cHxlbnwxfHx8fDE3NzEyMzM3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "NESTEA",
      category: "Beverages",
      tagline: "Refreshing iced tea experience",
      image: "https://images.unsplash.com/photo-1664344589345-a60139995adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBiZXZlcmFnZSUyMGN1cCUyMGhvdHxlbnwxfHx8fDE3NzEzMTI2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "NESTLÉ a+ Milk",
      category: "Dairy",
      tagline: "Pure and nutritious goodness",
      image: "https://images.unsplash.com/photo-1581868164904-77b124b80242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMG1pbGslMjB5b2d1cnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzEzMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "NESTLÉ EVERYDAY",
      category: "Dairy",
      tagline: "Makes your tea taste better",
      image: "https://images.unsplash.com/photo-1581868164904-77b124b80242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMG1pbGslMjB5b2d1cnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzEzMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "NESTLÉ CERELAC",
      category: "Cereals",
      tagline: "Baby's first solid food",
      image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZm9vZCUyMG51dHJpdGlvbiUyMGluZmFudHxlbnwxfHx8fDE3NzEzMTI2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      name: "NESTLÉ KOKO KRUNCH",
      category: "Cereals",
      tagline: "Chocolatey breakfast fun",
      image: "https://images.unsplash.com/photo-1579029746049-f6aec2885d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjZXJlYWwlMjBib3dsJTIwbWlsa3xlbnwxfHx8fDE3NzEzMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 7,
      name: "KITKAT",
      category: "Confectionery",
      tagline: "Have a break, have a KITKAT",
      image: "https://images.unsplash.com/photo-1673551494394-23b13e77e58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzcxMjUzNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 8,
      name: "MUNCH",
      category: "Confectionery",
      tagline: "Filled with crunchy joy",
      image: "https://images.unsplash.com/photo-1702743692629-b11e94c63b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMGNob2NvbGF0ZSUyMGJhciUyMHN3ZWV0fGVufDF8fHx8MTc3MTMxMjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 9,
      name: "MAGGI Noodles",
      category: "Culinary",
      tagline: "2-minute magic meals",
      image: "https://images.unsplash.com/photo-1628919311414-1ee37e9ed8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub29kbGVzJTIwaW5zdGFudCUyMGZvb2R8ZW58MXx8fHwxNzcxMzEyNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 10,
      name: "MAGGI Masala-ae-Magic",
      category: "Culinary",
      tagline: "Instant taste enhancer",
      image: "https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F3092%2F1670502369167.png%3Ftype%3Dpng&w=1080&q=75",
    },
    {
      id: 11,
      name: "NESCAFÉ Latte",
      category: "Beverages",
      tagline: "Creamy coffee delight",
      image: "https://images.unsplash.com/photo-1657047698672-cbf2fd464d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZXZlcmFnZSUyMGN1cHxlbnwxfHx8fDE3NzEyMzM3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 12,
      name: "MILKMAID",
      category: "Dairy",
      tagline: "Sweeten your creations",
      image: "https://images.unsplash.com/photo-1581868164904-77b124b80242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMG1pbGslMjB5b2d1cnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzEzMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl mb-4">Our Products</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover our wide range of trusted brands that bring goodness to your everyday life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} isInView={isInView} />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  product,
  index,
  isInView,
}: {
  product: Product;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs mb-3">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{product.tagline}</p>
        <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all group-hover:scale-105">
          View Details
        </button>
      </div>
    </motion.div>
  );
}