import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/products/products.route';
import { ChairRoutes } from '../modules/chair/chair.route';

const router = express.Router();

const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/collections',
    route: ProductRoutes,
  },
  {
    path: '/collections/chairs',
    route: ChairRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
