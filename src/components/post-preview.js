import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
    border-bottom: 1px solid #ddd;
    margin-top: 0.75rem;
    padding-bottom: 1rem;
    :first-type-of{
      margin-top: 1rem;
    }
    `}
  >
    <h3>{post.title}</h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
  </article>
);

export default PostPreview;
