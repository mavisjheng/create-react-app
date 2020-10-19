import { rest } from 'msw';

import rings from 'mocks/data/rings.json';

export const handlers = [
  rest.get('/rings', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(rings));
  }),
];
