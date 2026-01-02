import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Building Neural Networks with TensorFlow",
      excerpt:
        "A comprehensive guide to creating and training neural networks using TensorFlow for image classification tasks.",
      date: "2025-04-10",
      readTime: "8 min",
      tags: ["Machine Learning", "TensorFlow", "Neural Networks"],
    },
    {
      title: "Modern Web Development Best Practices",
      excerpt:
        "Exploring the latest trends and best practices in web development, from performance optimization to user experience.",
      date: "2025-04-05",
      readTime: "6 min",
      tags: ["Web Development", "JavaScript", "Performance"],
    },
    {
      title: "Integrating AI in Web Applications",
      excerpt:
        "Learn how to incorporate machine learning models into your web applications for enhanced functionality.",
      date: "2025-03-28",
      readTime: "10 min",
      tags: ["AI", "Web Development", "Integration"],
    },
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
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Articles are currently being written and will be published soon.
              The topics below reflect areas I actively work and research in.
            </p>
          </div>

          {/* POSTS */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-premium p-6 cursor-default"
              >
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

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
                      className="flex items-center gap-1 text-xs bg-secondary/40 text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
