
import Restaurant from '../models/restaurantModel.js';

export const addRestaurant = async (req, res) => {
  const restaurantObj = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    imgURL: req.body.imgURL,
    location: req.body.location,
    phone: req.body.phone,
    rating: req.body.rating,
  };

  try {
    const restaurant = await Restaurant.create(restaurantObj);
    res.status(200).send(restaurant);
  } catch (err) {
    console.log('Error creating restaurant', err.message);
    res.status(500).send('Error occurred while creating restaurant');
  }
};

export const getAllRestaurants = async (req,res) =>{

    const restaurantQuery = {}
    const restaurant = await Restaurant.find(restaurantQuery)
    res.status(200).send({
        restaurant,
        message: "Restaurant Fetched Successfully"
    })

}

export const getAllCategories = async (req,res) =>{
    const restaurantCategory = await Restaurant.distinct('category')
    res.status(200).send(restaurantCategory)
}

export const getAllRestaurantByCategory = async (req,res) =>{
    const {categoryName} = req.params;
    const restaurants = await Restaurant.find({
        category: categoryName
    })
    res.status(200).send(restaurants)
}

export const getAllNames = async (req,res) =>{
    const restaurantName = await Restaurant.distinct('name')
    res.status(200).send(restaurantName)
}

export const getRestaurantByName = async (req,res) =>{
    const {restaurantName} = req.params
    const restaurants = await Restaurant.find({
        name: restaurantName
    })
    res.status(200).send(restaurants)
}

export const getRestaurantByRatings = async (req,res) =>{
    const {ratingValue} = req.params
    const restaurant = await Restaurant.find({rating: {$gte: ratingValue}})
    res.status(200).send(restaurant)
}

export const updateRestaurant = async (req,res)=>{
    const {id} = req.params
    const restaurantObj = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        imgURL: req.body.imgURL,
        location: req.body.location,
        phone: req.body.phone,
        rating: req.body.rating
    }

    const restaurant = await Restaurant.findByIdAndUpdate(id,restaurantObj,{new: true})
    if (restaurant){
        res.status(200).send({
            restaurant,
            message: "Restaurant updated successfully"
        })
    }else{
        res.status(400).send({message:"No restaurant found for given ID"})
    }

}

export const deleteRestaurant = async(req,res) =>{
    const {id} = req.params;
    const restaurant = await Restaurant.findByIdAndDelete(id)
    res.status(200).send({
        restaurant,
        message: "Restaurant deleted successfully"
    })
}

export const deleteAllRestaurants = async(req,res) =>{
    const restaurant = await Restaurant.deleteMany({})
    const {deletedCount} = restaurant
    if (deletedCount > 0){
        res.status(200).send({
            acknowledged: true,
            DeletedCount: deletedCount,
            message: "Restaurants deleted succesfully"
        })
    }
}