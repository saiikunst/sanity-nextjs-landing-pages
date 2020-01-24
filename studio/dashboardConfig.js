export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e2b44bb16cf53077cb2ffdd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vbtgivv7',
                  apiId: '9f7ac9c2-e95e-497a-8a6b-9204e24083d0'
                },
                {
                  buildHookId: '5e2b44bce3b7297d0ff6749d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wameek8u',
                  apiId: 'bcfae308-f8ea-44b4-8b87-76fc12fcf07d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saiikunst/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wameek8u.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
