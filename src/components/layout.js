import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => {
  <>
    <Global 
    styles={css`
      *{ box-sizing: border-box;
      margin: 0;
    `} />
  </>
}