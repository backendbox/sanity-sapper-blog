export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d12237e4bcf08a32d999243',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-vyeze3y7',
                  apiId: 'bc08faa6-395d-44f9-92a1-a41559e388b0'
                },
                {
                  buildHookId: '5d12237e278843fd33e25f1f',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-qvu1h3xi',
                  apiId: '1a442b5c-da20-4833-ad2f-13b21be761f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/backendbox/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-qvu1h3xi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
