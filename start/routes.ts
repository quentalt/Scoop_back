/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return { hello: 'world' }
})



router.get('/articles/:id', async ({params}) => {
  return { id: params.id, title: `Article ${params.id}`, content: `Content ${params.id}` };
})

router.post('/articles', ({ response}) => {
 return response.redirect("/articles")
});

router.patch('/articles/:id', ({params}) => {
  return {params};
}).where('id',{
  match:/^[0-9]+$/,
    cast:(id) => Number(id),
  });

router.delete('/articles/:id', ({params}) => {
  return {params};
}).where('id',{
  match:/^[0-9]+$/,
  cast:(id) => Number(id),
});


