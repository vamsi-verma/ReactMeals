import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description:
      "Rice and meat or vegetables are prepared separately, then combined and slow-cooked in the oven to create this aromatic “dry dish” (there is no creamy gravy-like sauce).",
    price: 200,
  },
  {
    id: "m2",
    name: "Butter chicken",
    description:
      "A mild curry, it combines onions, butter and cream in a velvety smooth tomato sauce with chicken chunks.",
    price: 170,
  },
  {
    id: "m3",
    name: "Chaat",
    description:
      "made with a samosa-style crust, boiled potatoes and chickpeas, topped with tamarind chutney and crunchy bits of deep-fried noodles",
    price: 80,
  },
  {
    id: "m4",
    name: "Dosa",
    description:
      "A thin pancake usually made from rice and lentils stuffed with veggies served with chutney as an accompaniment to a curry meal",
    price: 100,
  },
  {
    id: "m5",
    name: "Korma",
    description:
      "Braised meat (maybe chicken or beef) and vegetables are slow cooked in a thick mild curry sauce made with cream, coconut milk or yogurt and sometimes almonds.",
    price: 250,
  },
  {
    id: "m6",
    name: "Matter Paneer",
    description:
      "Butter paneer is an Indian curry made with cubes of paneer (a soft fresh cheese like cottage cheese). It is mixed with peas and a tomato-and-onion based sauce.",
    price: 120,
  },
  {
    id: "m7",
    name: "Papadum",
    description:
      " little peppery, papadums often come with coriander mint chutney.",
    price: 30,
  },
  {
    id: "m8",
    name: "Paratha",
    description: " paratha is unleavened flatbread",
    price: 20,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
