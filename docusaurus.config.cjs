const math = require('remark-math').default;
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn').default || require('@docusaurus/remark-plugin-npm2yarn');
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.oceanicNext;
const katex = require('rehype-katex').default;

module.exports = {
    title: 'api.megoru.ru',
    tagline: '',
    url: 'https://docs.megoru.ru',
    baseUrl: '/',
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.png',
    organizationName: 'megoru',
    projectName: 'api.megoru.ru',
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru'],
    },
    themeConfig: {
        image: 'img/favicon.png',
        navbar: {
            title: 'api.megoru.ru',
            logo: {
                alt: 'logo',
                src: 'img/logo.svg',
            },
            items: [
                { to: '/giveaway', position: 'left', label: 'API' },
                { href: '/sdk/', position: 'left', label: 'SDK' },
                {
                    href: 'https://github.com/megoRU/docs.megoru.ru',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'Репозиторий на GitHub',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Документация',
                    items: [
                        { label: 'REST API', to: '/giveaway' },
                        { label: 'SDK', to: '/sdk/' },
                    ],
                },
                {
                    title: 'Ссылки',
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
