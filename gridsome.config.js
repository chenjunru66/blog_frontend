// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',//通过markdown文件获取数据
      options: {
        typeName: 'BlogPost',//数据名称，抓取数据生成到GraphQL 
        path: './content/blog/**/*.md',//还需要对应文件转换器
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],//contentTypes为集合会生成StrapiPost，StrapiTag，下面templates用到
        singleTypes: ['general'],//singleType单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiPost: [{
      path: '/post/:id',
      component: './src/templates/Post.vue'

    }],
    StrapiTag: [{
      path: '/tag/:id',
      component: './src/templates/Tag.vue'

    }]
  }
}
