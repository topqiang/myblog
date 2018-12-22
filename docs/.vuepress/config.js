module.exports = {
    title: 'Topqiang\'s blog',
    description: '欢迎来到我的博客，我是一名前端个工程师。希望我们可以在此留下更多交流！',
    themeConfig: {
        locales: {
            '/':{
                nav: [
                    { text: '首页', link: '/' },
                    { text: '个人简介', link: '/self-info/' },
                    { text: '项目经历', link: '/project/' },
                    { text: '知识积累', link: '/knowledge/' },
                ],
            }
        },
        sidebarDepth: 2,
        displayAllHeaders: true
    },
    dest:'public'
};
  