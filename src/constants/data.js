import images from './images';

const wines = [
  {
    title: "Wake n' Bake",
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Healthy Porridge Bowl',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Italian Frittata (Italian Omelette)',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Avocado Toast',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Beet Pray Love',
    price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Breakfast Tacos',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Mango & Passion Fruit Fusion',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Passion Tropic",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Margarita',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Original Mojito',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Watermelon Mojito',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmondlol',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const history = [
  {
    imgUrl: images.gallefort,
    title: 'galle',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  
];

export default { wines, cocktails, awards, history };
