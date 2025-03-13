export type NavigationItem = {
  name: string;
  path: string;
};

export const SITE = {
  name: 'Joshua Nwosu',
  title: 'Software Engineer & Curious Tinkerer',
  description: 'Personal portfolio and blog',
  url: 'https://bytekai.dev',
  defaultImage: '/default-og-image.jpg',
} as const;

export const NAVIGATION: {
  main: NavigationItem[];
} = {
  main: [
    { name: 'Jerry.', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    {
      name: "Let's Chat",
      path: 'mailto:jerrynwosu007@gmail.com',
    },
  ],
} as const;

export const CONTENT = {
  postsPerPage: 10,
  recentPostsLimit: 3,
  featuredProjectsLimit: 3,
} as const;

export const META = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
} as const;
