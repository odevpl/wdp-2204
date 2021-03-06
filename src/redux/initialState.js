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
      oldPrice: '$ 35',
      price: 30,
      stars: 2,
      myStars: 4,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/6758350/pexels-photo-6758350.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      toCompare: true,
      isFavorite: true,
      isTopSeller: true,
      activeInGallery: true,
      popup: false,
      image:
        'https://images.pexels.com/photos/6758350/pexels-photo-6758350.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },

    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: true,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/6265937/pexels-photo-6265937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      oldPrice: '$ 45',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: true,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/6970069/pexels-photo-6970069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      oldPrice: '$ 50',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: true,
      isTopSeller: true,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/4290715/pexels-photo-4290715.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: false,
      isTopSeller: true,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: true,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/2029687/pexels-photo-2029687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: true,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/6758346/pexels-photo-6758346.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/776984/pexels-photo-776984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/7512037/pexels-photo-7512037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/4290711/pexels-photo-4290711.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/8134771/pexels-photo-8134771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/5998023/pexels-photo-5998023.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/276663/pexels-photo-276663.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image: '',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/916339/pexels-photo-916339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/3154304/pexels-photo-3154304.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/172869/pexels-photo-172869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/2495555/pexels-photo-2495555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/3259922/pexels-photo-3259922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/7932264/pexels-photo-7932264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/8092311/pexels-photo-8092311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/8346248/pexels-photo-8346248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'chair',
      price: 32,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      isTopSeller: false,
      activeGallery: false,
      image:
        'https://images.pexels.com/photos/7407771/pexels-photo-7407771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
      size: '160x200',
      color: 'dark',
    },
  ],
  promotion: [
    {
      id: 'armchair',
      name: 'Anean Ru Britique',
      category: 'Chair',
      oldPrice: ' $ 350',
      price: 300,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: true,
      image:
        'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    },
    {
      id: 'armchair-2',
      name: 'indoor',
      name2: 'furniture',
      category: 'Sofa',
      description: 'save up to 50% off all furniture',
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: true,
      image: 'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_960_720.jpg',
    },
  ],
  promotions: [
    {
      id: 'sofa',
      title: 'sofa',
      subtitle: 'guest room',
      image:
        'https://images.pexels.com/photos/6934175/pexels-photo-6934175.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      promoPrice: '-20%',
    },
    {
      id: 'chair',
      boldTitle: 'office',
      title: 'chair',
      subtitle: 'collection',
      imageOne:
        'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTwo:
        'https://images.pexels.com/photos/4067759/pexels-photo-4067759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      promoPrice: '$200.00',
    },
    {
      id: 'bed',
      boldTitle: 'special',
      title: 'collection',
      subtitleOne: 'save up',
      subtitleTwo: 'of furniture',
      image:
        'https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      promoPrice: '45%',
    },
  ],

  cart: {
    products: [],
  },

  brands: [
    {
      id: '1',
      name: 'brand1',
      image: 'https://i.postimg.cc/QxPJ8hXy/brand-1.png',
    },
    {
      id: '2',
      name: 'brand2',
      image: 'https://i.postimg.cc/pdMQjC5Q/brand-2.png',
    },
    {
      id: '3',
      name: 'brand3',
      image: 'https://i.postimg.cc/B6qxYvgX/brand-3.png',
    },
    {
      id: '4',
      name: 'brand4',
      image: 'https://i.postimg.cc/d14GzKHn/brand-4.png',
    },
    {
      id: '5',
      name: 'brand5',
      image: 'https://i.postimg.cc/x8ZM13Sz/brand-5.png',
    },
    {
      id: '6',
      name: 'brand6',
      image: 'https://i.postimg.cc/B6qxYvgX/brand-3.png',
    },
  ],

  feedback: [
    {
      id: 1,
      comment:
        'Great products at a good price. The next day delivery was safely packaged. Free unpacking of the furniture is an added plus.',
      author: 'Adam Green',
      authorType: 'Client',
      photo:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
    },
    {
      id: 2,
      comment:
        'Very good quality furniture, easy to assemble by yourself. There is no such choice anywhere else.',
      author: 'Peter McBeal',
      authorType: 'Client',
      photo:
        'https://images.unsplash.com/photo-1612979572692-f8a4cb3dce2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
    },
    {
      id: 3,
      comment:
        'Working with this store is pure pleasure. I am glad that we can produce the best quality furniture that the customers of this store will enjoy.',
      author: 'Ann Scott',
      authorType: 'Supplier',
      photo:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600',
    },
  ],

  gallery: {
    id: 'bed',
    title: 'Bedroom Bed',
    subtitle: 'from',
    promoPrice: '$50.80',
    image:
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
};

export default initialState;
