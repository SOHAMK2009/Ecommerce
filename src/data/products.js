export const products = [
  {
    id: 1,
    name: 'VELOCE Apex Pro',
    price: 289,
    priceDisplay: '$289',
    tag: 'NEW',
    tagClass: 'tag--new',
    soldOut: false,
    category: 'running',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Shadow Runner X',
    price: 245,
    priceDisplay: '$245',
    tag: 'HOT',
    tagClass: 'tag--hot',
    soldOut: false,
    category: 'street',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Neon Drift 07',
    price: 320,
    priceDisplay: '$320',
    tag: 'NEW',
    tagClass: 'tag--new',
    soldOut: false,
    category: 'limited',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Carbon Elite',
    price: 410,
    priceDisplay: '$410',
    tag: 'SOLD OUT',
    tagClass: 'tag--sold',
    soldOut: true,
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&q=80',
  },
];

export const orders = [
  {
    id: 'VL-10482',
    date: 'May 28, 2025',
    status: 'Delivered',
    total: '$289.00',
    productId: 1,
  },
  {
    id: 'VL-10391',
    date: 'Apr 14, 2025',
    status: 'Delivered',
    total: '$245.00',
    productId: 2,
  },
  {
    id: 'VL-10256',
    date: 'Mar 02, 2025',
    status: 'In Transit',
    total: '$320.00',
    productId: 3,
  },
].map((order) => {
  const product = products.find((p) => p.id === order.productId);
  return {
    ...order,
    item: product.name,
    image: product.image,
  };
});
