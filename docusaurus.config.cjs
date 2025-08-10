const math = require('remark-math').default;
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn').default || require('@docusaurus/remark-plugin-npm2yarn');
const lightCodeTheme = require('prism-react-renderer/themes/github').default;
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext').default;
const katex = require('rehype-katex').default;

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
            copyright: `© ${new Date().getFullYear()} megoru.ru`,
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
                        math,
                        [npm2yarn, { sync: true }],
                    ],
                    rehypePlugins: [katex],
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editUrl: 'https://github.com/megoRU/docs.megoru.ru',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    themes: [
        [
            '@easyops-cn/docusaurus-search-local',
            {
                hashed: true,
                language: ['ru'],
                docsRouteBasePath: '/',
            },
        ],
    ],
};
