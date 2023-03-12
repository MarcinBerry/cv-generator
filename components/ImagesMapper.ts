import { StaticImageData } from 'next/image';

import CSSIcon from '@/public/images/css-icon.png';
import GitIcon from '@/public/images/git-icon.png';
import GithubIcon from '@/public/images/github-icon.png';
import GraphqlIcon from '@/public/images/graphql-icon.png';
import HTML5Icon from '@/public/images/html5-icon.png';
import NodeIcon from '@/public/images/node-icon.png';
import NpmIcon from '@/public/images/npm-icon.png';
import PostmanIcon from '@/public/images/postman-icon.png';
import SassIcon from '@/public/images/sass-icon.png';
import StorybookIcon from '@/public/images/storybook-icon.png';
import TailwindIcon from '@/public/images/tailwindcss-icon.png';
import WebpackIcon from '@/public/images/webpack-icon.png';
import YarnIcon from '@/public/images/yarn-icon.png';

export const technologyToImage: Record<string, StaticImageData> = {
  css: CSSIcon,
  html5: HTML5Icon,
  git: GitIcon,
  github: GithubIcon,
  webpack: WebpackIcon,
  postman: PostmanIcon,
  yarn: YarnIcon,
  graphql: GraphqlIcon,
  npm: NpmIcon,
  node: NodeIcon,
  sass: SassIcon,
  storybook: StorybookIcon,
  tailwindcss: TailwindIcon,
};
