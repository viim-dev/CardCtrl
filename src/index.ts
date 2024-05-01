import { Elysia } from 'elysia';
import { Eta } from 'eta';
import path from 'path';

const app = new Elysia();
const eta = new Eta({ views: path.join(process.cwd(), 'src/templates') });

app.get('/', async () => {
  const html = await eta.render('index.eta',{});
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
});

app.listen(3000);
