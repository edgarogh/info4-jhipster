import delivererUser from 'app/entities/deliverer-user/deliverer-user.reducer';
import customerUser from 'app/entities/customer-user/customer-user.reducer';
import restaurant from 'app/entities/restaurant/restaurant.reducer';
import foodCategory from 'app/entities/food-category/food-category.reducer';
import foodItem from 'app/entities/food-item/food-item.reducer';
import order from 'app/entities/order/order.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  delivererUser,
  customerUser,
  restaurant,
  foodCategory,
  foodItem,
  order,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
