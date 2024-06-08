import { http, HttpResponse } from 'msw';

import posts from './data/posts.json';
import users from './data/users.json';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(users);
  }),
  http.get('https://jsonplaceholder.typicode.com/users/:id', ({ params }) => {
    const data = users.find((user) => user.id === Number(params.id));

    return HttpResponse.json(data);
  }),
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json(posts);
  }),
  http.get('https://jsonplaceholder.typicode.com/posts/:id', ({ params }) => {
    const data = posts.find((post) => post.id === Number(params.id));

    return HttpResponse.json(data);
  }),
];
