import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/deliverer-user">
        <Translate contentKey="global.menu.entities.delivererUser" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/customer-user">
        <Translate contentKey="global.menu.entities.customerUser" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/restaurant">
        <Translate contentKey="global.menu.entities.restaurant" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/food-category">
        <Translate contentKey="global.menu.entities.foodCategory" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/food-item">
        <Translate contentKey="global.menu.entities.foodItem" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/order">
        <Translate contentKey="global.menu.entities.order" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
