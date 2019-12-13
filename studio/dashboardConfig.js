export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df33e715e2fa676680597c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4nzfnwp1',
                  apiId: '8a9a4ce6-fc77-43c6-90ab-7d81df5afdbd'
                },
                {
                  buildHookId: '5df33e7212565ef3e8ab2ba7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iufci8jy',
                  apiId: '2b623766-bc09-4956-915d-20f795fc9ec4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kunio-le/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iufci8jy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
