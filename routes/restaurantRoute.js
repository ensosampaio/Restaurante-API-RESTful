import { addRestaurant } from '../controllers/restaurant.controller.js';
import { getAllRestaurants } from '../controllers/restaurant.controller.js';
import {getAllCategories} from '../controllers/restaurant.controller.js'
import {getAllRestaurantByCategory} from '../controllers/restaurant.controller.js'
import {getAllNames} from '../controllers/restaurant.controller.js'
import {getRestaurantByName} from '../controllers/restaurant.controller.js'
import {getRestaurantByRatings} from '../controllers/restaurant.controller.js'
import {updateRestaurant} from '../controllers/restaurant.controller.js'
import {deleteRestaurant} from '../controllers/restaurant.controller.js'
import {deleteAllRestaurants} from '../controllers/restaurant.controller.js'


export default function(app) {
  app.post('/api/restaurant/add', addRestaurant);
  app.get('/api/restaurant/', getAllRestaurants);
  app.get('/api/restaurant/categories', getAllCategories )
  app.get('/api/restaurant/categories/:categoryName',getAllRestaurantByCategory )
  app.get('/api/restaurant/names', getAllNames )
  app.get('/api/restaurant/names/:restaurantName',getRestaurantByName )
  app.get('/api/restaurant/ratings/:ratingValue',getRestaurantByRatings )
  app.put('/api/restaurant/:id',updateRestaurant )
  app.delete('/api/restaurant/:id',deleteRestaurant)
  app.delete('/api/restaurant',deleteAllRestaurants)



} 