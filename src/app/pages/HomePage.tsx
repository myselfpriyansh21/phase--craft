import { Link } from "react-router";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Heart, Leaf, Award, ChefHat, ShieldCheck, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <NutritionWellness />
      <Sustainability />
      <RecipesSection />
      <BrandTrust />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1767022519030-d16f5602ac8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5pbmclMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NzEzMTI1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Family enjoying healthy food together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <motion.h1
            className="text-5xl md:text-7xl mb-6 font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Good Food, Good Life
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enhancing quality of life and contributing to a healthier future for families across India
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full hover:bg-white/90 transition-all hover:scale-105"
            >
              Our Purpose
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const products = [
    {
      id: 1,
      name: "NESCAFÉ",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1657047698672-cbf2fd464d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZXZlcmFnZSUyMGN1cHxlbnwxfHx8fDE3NzEyMzM3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "KITKAT",
      category: "Confectionery",
      image: "https://images.unsplash.com/photo-1673551494394-23b13e77e58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzcxMjUzNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "NESTLÉ CERELAC",
      category: "Cereals",
      image: "https://images.unsplash.com/photo-1579029746049-f6aec2885d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjZXJlYWwlMjBib3dsJTIwbWlsa3xlbnwxfHx8fDE3NzEzMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "NESTLÉ a+",
      category: "Dairy",
      image: "https://images.unsplash.com/photo-1581868164904-77b124b80242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMG1pbGslMjB5b2d1cnQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzEzMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of trusted brands that have been part of Indian homes for generations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/products"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function NutritionWellness() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-semibold">Nutrition & Wellness</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">Committed to Your Health</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Nestlé, we believe that nutrition is the foundation of health and wellness. Our
              products are crafted with care, using quality ingredients to provide essential
              nutrients that support a healthy lifestyle for you and your family.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground">Scientifically developed nutritional solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground">Fortified with essential vitamins and minerals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-foreground">Supporting healthy growth and development</span>
              </li>
            </ul>
            <a
              href="#nutrition"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-all hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViC1gEr-M_SHvQR7mFbydR0JkR0GsrtUilA&s"
                alt="Nutrition and wellness"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Leaf,
      title: "Zero Waste",
      description: "Committed to 100% recyclable packaging by 2025",
    },
    {
      icon: Users,
      title: "Farmer Support",
      description: "Supporting 150,000+ farmers across India",
    },
    {
      icon: ShieldCheck,
      title: "Quality First",
      description: "Rigorous testing at every stage of production",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MTMxMjU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sustainable farming"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-semibold">Sustainability</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">
              Building a Sustainable Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our commitment to sustainability goes beyond our products. We're dedicated to
              protecting the environment, supporting communities, and ensuring a better tomorrow
              for future generations.
            </p>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#sustainability"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-all hover:scale-105"
              >
                Our Initiatives
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RecipesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const recipes = [
    {
      id: 1,
      name: "Masala Maggi",
      cookTime: "10 mins",
      difficulty: "Easy",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Chocolate Milkshake",
      cookTime: "5 mins",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1673551494394-23b13e77e58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzcxMjUzNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Quick Breakfast Bowl",
      cookTime: "8 mins",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1579029746049-f6aec2885d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjZXJlYWwlMjBib3dsJTIwbWlsa3xlbnwxfHx8fDE3NzEzMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">Delicious Recipes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of easy-to-make recipes using Nestlé products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/recipes"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-sm font-medium">
                    {recipe.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>⏱️ {recipe.cookTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            View All Recipes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BrandTrust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: "100+", label: "Years in India" },
    { value: "50+", label: "Trusted Brands" },
    { value: "8", label: "Manufacturing Facilities" },
    { value: "150K+", label: "Farmers Supported" },
  ];

  return (
    <section ref={ref} className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">Trusted for Generations</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Building trust through quality, innovation, and commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}