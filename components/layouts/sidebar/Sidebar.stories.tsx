import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from './Sidebar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Primary: ComponentStory<typeof Sidebar> = () => <Sidebar><h1>Hello</h1></Sidebar>;
