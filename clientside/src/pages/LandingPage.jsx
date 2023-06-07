import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/LandingPage.css';
import ReadPost from './User /ReadPost';
import Card from '../components/Card';

const posts = [
  {
    title: 'Getting Started with React Hooks',
    author: 'Jane Smith',
    description: 'Learn the basics of React Hooks and how they can simplify your React development process.',
  },
  {
    title: 'Building a Responsive Dashboard with React and Bootstrap',
    author: 'John Doe',
    description: 'Dive into the world of responsive web design by creating a dynamic dashboard using React and Bootstrap.',
  },
  {
    title: 'Testing React Components: An Introduction to Jest and Enzyme',
    author: 'Emily Johnson',
    description: 'Discover the importance of testing in React applications and how to use popular testing libraries like Jest and Enzyme.',
  },
  {
    title: 'State Management in React: Comparing Redux, MobX, and Context API',
    author: 'Mark Wilson',
    description: 'Explore different state management solutions for React applications, including Redux, MobX, and Context API.',
  },
  {
    title: 'Optimizing Performance in React: Tips and Best Practices',
    author: 'Amanda Rodriguez',
    description: 'Learn practical techniques to optimize the performance of your React applications.',
  },
];


const LandingPage = ({ isLoggedIn }) => {
  return (
    <div className="landing-page">
      <div className="content">
        {/* Add your landing page content here */}
        <h1>Welcome to the Medium Clone!</h1>
        <p>Experience the world of creative writing and engaging articles.</p>
        <p>Start reading, writing, and connecting with like-minded individuals.</p>
      </div>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;