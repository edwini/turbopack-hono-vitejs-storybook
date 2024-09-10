import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';
import { cotizaciones, posts, relatives } from './assets/mocks';
const api = new Hono()
api.get('/', (c) => c.text('Hello Hono!'))


// JSON
api.get('/parentezco', prettyJSON(), (c) => {
    return c.json(relatives, 200)
})
api.get('/posts', prettyJSON(), (c) => {
    return c.json(posts, 200)
})

api.get('/cotizaciones', prettyJSON(), (c) => {
    return c.json(cotizaciones, 200)
})

api.get('/Catalogo/GetCatalogos', prettyJSON(), (c) => {
    return c.json(cotizaciones, 200)
})
// status code
api.post('/posts', (c) => c.json({ message: 'Created!' }, 201)) 

console.log("API server http://localhost:8787");



const app = new Hono();
app.route("/api", api)
serve({
    fetch: app.fetch,    
    port: 8787,
})
