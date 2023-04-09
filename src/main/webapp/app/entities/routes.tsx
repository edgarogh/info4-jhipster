import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DelivererUser from './deliverer-user';
import CustomerUser from './customer-user';
import Restaurant from './restaurant';
import FoodCategory from './food-category';
import FoodItem from './food-item';
import Order from './order';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="deliverer-user/*" element={<DelivererUser />} />
        <Route path="customer-user/*" element={<CustomerUser />} />
        <Route path="restaurant/*" element={<Restaurant />} />
        <Route path="food-category/*" element={<FoodCategory />} />
        <Route path="food-item/*" element={<FoodItem />} />
        <Route path="order/*" element={<Order />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
