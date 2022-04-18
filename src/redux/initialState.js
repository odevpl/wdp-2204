const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: true,
      image:
        'https://images.pexels.com/photos/6758350/pexels-photo-6758350.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/6265937/pexels-photo-6265937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/6970069/pexels-photo-6970069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: true,
      image:
        'https://images.pexels.com/photos/4290715/pexels-photo-4290715.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/2029687/pexels-photo-2029687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: true,
      image:
        'https://images.pexels.com/photos/6758346/pexels-photo-6758346.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/776984/pexels-photo-776984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/7512037/pexels-photo-7512037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/4290711/pexels-photo-4290711.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/8134771/pexels-photo-8134771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/5998023/pexels-photo-5998023.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/276663/pexels-photo-276663.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: '',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/916339/pexels-photo-916339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/3154304/pexels-photo-3154304.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/172869/pexels-photo-172869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
