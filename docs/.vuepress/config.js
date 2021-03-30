module.exports = {
    title: 'Easy UI',
    description: '简单易用、高效开发',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/install/'},
            {text: '交流', link: 'https://github.com/Tomabage/easy'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/toast',
                    '/components/collapse',
                    '/components/popover',
                ]
            },
        ]
    }
}