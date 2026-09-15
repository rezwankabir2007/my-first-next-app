import React from "react";
import Post from "@/app/componants/Post";

// Todo: Fetch the data from an API or database in a real-world scenario

const blogsData = [
  {
    id: 1,
    title: "How to Start Learning Web Development",
    description:
      "A beginner-friendly guide to HTML, CSS, JavaScript, and the essential steps to start your web development journey.",
    author: "Rezwan Kabir",
    category: "Web Development",
    date: "Sep 15, 2026",
    image: "/images/web-development.jpg",
  },
  {
    id: 2,
    title: "Why Every Student Should Learn Programming",
    description:
      "Discover how programming can improve problem-solving skills and open exciting career opportunities for students.",
    author: "Rezwan Kabir",
    category: "Programming",
    date: "Sep 12, 2026",
    image: "/images/programming.jpg",
  },
  {
    id: 3,
    title: "React vs Next.js: What Should You Learn?",
    description:
      "Understand the key differences between React and Next.js and find out which one is better for your learning journey.",
    author: "Rezwan Kabir",
    category: "React",
    date: "Sep 10, 2026",
    image: "/images/react-nextjs.jpg",
  },
  {
    id: 4,
    title: "5 Tips to Study Smarter, Not Harder",
    description:
      "Learn practical study techniques that can help you stay focused, manage your time, and achieve better results.",
    author: "Rezwan Kabir",
    category: "Study Tips",
    date: "Sep 7, 2026",
    image: "/images/study-tips.jpg",
  },
  {
    id: 5,
    title: "How to Build Your First Portfolio Website",
    description:
      "A simple roadmap for students to create a professional portfolio website and showcase their skills and projects.",
    author: "Rezwan Kabir",
    category: "Career",
    date: "Sep 5, 2026",
    image: "/images/portfolio.jpg",
  },
];

const BlogPosts = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>

      {/* Grid wrapper for better styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;