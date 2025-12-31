import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      title: "Building Neural Networks with TensorFlow",
      excerpt: "A comprehensive guide to creating and training neural networks using TensorFlow for image classification tasks.",
      date: "2025-04-10",
      readTime: "8 min",
      tags: ["Machine Learning", "TensorFlow", "Neural Networks"],
      image: "tensorflow-guide",
      slug: "building-neural-networks-tensorflow"
    },
    {
      title: "Modern Web Development Best Practices",
      excerpt: "Exploring the latest trends and best practices in web development, from performance optimization to user experience.",
      date: "2025-04-05",
      readTime: "6 min",
      tags: ["Web Development", "JavaScript", "Performance"],
      image: "web-dev",
      slug: "modern-web-development-best-practices"
    },
    {
      title: "Integrating AI in Web Applications",
      excerpt: "Learn how to incorporate machine learning models into your web applications for enhanced functionality.",
      date: "2025-03-28",
      readTime: "10 min",
      tags: ["AI", "Web Development", "Integration"],
      image: "ai-web",
      slug: "integrating-ai-web-applications"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Blog & Insights</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Welcome to my blog! Here I share insights on web development, machine learning, and tech trends. Stay tuned for articles, tutorials, and project deep dives.
          </p>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="blog-card bg-secondary/20 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-primary hover:underline cursor-pointer">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;