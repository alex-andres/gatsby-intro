import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero></Hero>
      <Layout>
        <h1>Home</h1>
        <p>Hello Los Angeles</p>
        <Link to="/about"> Learn about me &rarr; </Link>

        <h2>Read my blog</h2>

        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
