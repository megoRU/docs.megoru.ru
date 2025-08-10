const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const { createRequire } = require('module');
const requireESM = createRequire(import.meta.url);

const remarkMath = requireESM('remark-math').default;
const rehypeKatex = requireESM('rehype-katex').default;

/** @type {import('@docusaurus/types').Config} */
module.exports = {
    title: 'api.megoru.ru',
    tagline: '',
    url: 'https://docs.megoru.ru',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'megoru',
    projectName: 'api.megoru.ru',
    themeConfig: {
        navbar: {
            title: 'api.megoru.ru',
            logo: {
                alt: 'logo',
                src: 'img/logo.svg',
            },
            items: [
                { href: '/api/', position: 'left', label: 'API' },
                { href: '/sdk/', position: 'left', label: 'SDK' },
                {
                    href: 'https://github.com/megoRU/docs.megoru.ru',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        { label: 'REST API', to: '/api/' },
                        { label: "SDK's", to: '/sdk/' },
                    ],
                },
                {
                    title: 'Links',
                    items: [
                        { label: 'GitHub', href: 'https://github.com/megoRU' },
                        { label: 'megoru.ru', href: 'https://megoru.ru' },
                    ],
                },
            ],
            copyright: `${new Date().getFullYear()} | megoru.ru`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    remarkPlugins: [
                        remarkMath,
                        [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
                    ],
                    rehypePlugins: [rehypeKatex],
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editUrl: 'https://github.com/megoRU/docs.megoru.ru',
                },
                blog: false, // чтобы не было ворнинга про blogDir
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    themes: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['ru'],
                docsRouteBasePath: '/',
            },
        ],
    ],
};
