export type Category = 'Espresso Drinks' | 'Cold Drinks' | 'Hot Drinks' | 'Pastries' | 'Sandwiches'
export type Badge = 'Popular' | 'House Favourite'

export interface MenuItem {
  id: string
  category: Category
  name: string
  description: string
  price: string
  badge?: Badge
}

export const CATEGORIES: Category[] = [
  'Espresso Drinks',
  'Cold Drinks',
  'Hot Drinks',
  'Pastries',
  'Sandwiches',
]

export const CATEGORY_META: Record<Category, { color: string; icon: string; slug: string }> = {
  'Espresso Drinks': { color: 'bg-olive-400',  icon: '☕', slug: 'espresso-drinks' },
  'Cold Drinks':     { color: 'bg-teal-400',   icon: '🧋', slug: 'cold-drinks' },
  'Hot Drinks':      { color: 'bg-rose-400',   icon: '🍵', slug: 'hot-drinks' },
  'Pastries':        { color: 'bg-berry-400',  icon: '🥐', slug: 'pastries' },
  'Sandwiches':      { color: 'bg-gold-300',   icon: '🥪', slug: 'sandwiches' },
}

export const menuItems: MenuItem[] = [
  // ── Espresso Drinks ──────────────────────────────────────────────────────
  { id: 'espresso',           category: 'Espresso Drinks', name: 'Espresso',           description: 'A single concentrated shot of rich espresso with a golden crema. Pure and bold.',                                    price: '£3.50' },
  { id: 'double-espresso',    category: 'Espresso Drinks', name: 'Double Espresso',    description: 'Two shots of our signature espresso blend for a deeper, more intense hit.',                                           price: '£4.50' },
  { id: 'americano',          category: 'Espresso Drinks', name: 'Americano',          description: 'Espresso shots pulled long with hot water. Strong character, smooth finish.',                                         price: '£4.00' },
  { id: 'cappuccino',         category: 'Espresso Drinks', name: 'Cappuccino',         description: 'Equal parts espresso, steamed milk, and velvety foam. A timeless classic.',                                          price: '£5.00', badge: 'Popular' },
  { id: 'flat-white',         category: 'Espresso Drinks', name: 'Flat White',         description: 'Silky micro-foamed milk over a double ristretto shot. Velvety, bold, and balanced.',                                 price: '£5.50', badge: 'House Favourite' },
  { id: 'latte',              category: 'Espresso Drinks', name: 'Latte',              description: 'A gentle espresso base cloaked in smooth steamed milk. Creamy and comforting.',                                      price: '£5.50' },
  { id: 'caramel-latte',      category: 'Espresso Drinks', name: 'Caramel Latte',      description: 'Our classic latte finished with housemade salted caramel drizzle. Sweet meets smoky.',                               price: '£6.50', badge: 'Popular' },
  { id: 'hazelnut-mocha',     category: 'Espresso Drinks', name: 'Hazelnut Mocha',     description: 'Espresso blended with dark chocolate and roasted hazelnut syrup. Rich and indulgent.',                               price: '£6.50' },
  { id: 'cortado',            category: 'Espresso Drinks', name: 'Cortado',            description: 'Equal parts espresso and warm milk, served short. Bold intensity in a small glass.',                                 price: '£5.00' },
  { id: 'macchiato',          category: 'Espresso Drinks', name: 'Macchiato',          description: 'A shot of espresso gently marked with a dollop of silky foam. Sharp and elegant.',                                   price: '£4.50' },
  { id: 'espresso-con-panna', category: 'Espresso Drinks', name: 'Espresso Con Panna', description: 'A shot of espresso crowned with a swirl of freshly whipped cream.',                                                  price: '£4.50' },
  { id: 'dirty-chai',         category: 'Espresso Drinks', name: 'Dirty Chai Latte',   description: 'Spiced masala chai spiked with a double espresso shot. Warming and complex.',                                        price: '£6.50', badge: 'House Favourite' },

  // ── Cold Drinks ──────────────────────────────────────────────────────────
  { id: 'iced-latte',              category: 'Cold Drinks', name: 'Iced Latte',              description: 'Double espresso chilled over ice and finished with cold milk. Refreshingly smooth.',                            price: '£6.00' },
  { id: 'cold-brew',               category: 'Cold Drinks', name: 'Cold Brew',               description: 'Steeped for 18 hours in cold water for a naturally sweet, mellow coffee concentrate.',                         price: '£5.50', badge: 'Popular' },
  { id: 'nitro-cold-brew',         category: 'Cold Drinks', name: 'Nitro Cold Brew',         description: 'Cold brew infused with nitrogen for a creamy, velvety texture straight from the tap.',                         price: '£6.50', badge: 'House Favourite' },
  { id: 'iced-cappuccino',         category: 'Cold Drinks', name: 'Iced Cappuccino',         description: 'Espresso shaken with ice and topped with cold foam. Light, frothy, and cooling.',                              price: '£6.00' },
  { id: 'iced-caramel-macchiato',  category: 'Cold Drinks', name: 'Iced Caramel Macchiato',  description: 'Vanilla milk and espresso poured over ice with a caramel drizzle. Sweet and layered.',                        price: '£7.00', badge: 'Popular' },
  { id: 'caramel-frappuccino',     category: 'Cold Drinks', name: 'Caramel Frappuccino',     description: 'Blended espresso with caramel sauce, ice, and whipped cream. Irresistibly sweet.',                            price: '£7.50', badge: 'Popular' },
  { id: 'nutella-mudslide',        category: 'Cold Drinks', name: 'Nutella Mudslide',        description: 'Rich Nutella blended with milk and ice cream, topped with chocolate drizzle.',                                 price: '£8.00', badge: 'House Favourite' },
  { id: 'chocolate-shake',         category: 'Cold Drinks', name: 'Chocolate Shake',         description: 'Thick and creamy blended shake made with Belgian dark chocolate and cold milk.',                               price: '£7.50' },
  { id: 'vanilla-bean-frappe',     category: 'Cold Drinks', name: 'Vanilla Bean Frappe',     description: 'Smooth vanilla bean blended with ice and milk, topped with whipped cream.',                                   price: '£7.00' },
  { id: 'iced-matcha',             category: 'Cold Drinks', name: 'Iced Matcha Latte',       description: 'Ceremonial-grade matcha whisked with oat milk and poured over ice. Earthy and fresh.',                        price: '£6.50', badge: 'House Favourite' },
  { id: 'strawberry-lemonade',     category: 'Cold Drinks', name: 'Strawberry Lemonade',     description: 'Fresh-squeezed lemonade blended with ripe strawberry puree. Bright and tangy.',                               price: '£5.50' },

  // ── Hot Drinks ────────────────────────────────────────────────────────────
  { id: 'hot-chocolate',    category: 'Hot Drinks', name: 'Hot Chocolate',        description: 'Single-origin dark chocolate melted into steamed milk. Rich, velvety, and warming.',                                      price: '£5.50', badge: 'Popular' },
  { id: 'matcha-latte',     category: 'Hot Drinks', name: 'Matcha Latte',         description: 'Stone-ground ceremonial matcha whisked with steamed oat milk. Earthy and smooth.',                                       price: '£6.00', badge: 'House Favourite' },
  { id: 'chai-latte',       category: 'Hot Drinks', name: 'Chai Latte',           description: 'A blend of cinnamon, cardamom, ginger, and clove steeped in steamed milk.',                                             price: '£5.50', badge: 'Popular' },
  { id: 'london-fog',       category: 'Hot Drinks', name: 'London Fog',           description: 'Earl Grey tea with lavender-vanilla syrup and steamed milk. Floral and refined.',                                       price: '£5.50', badge: 'House Favourite' },
  { id: 'english-breakfast',category: 'Hot Drinks', name: 'English Breakfast Tea',description: 'Classic full-bodied black tea served with your choice of milk.',                                                         price: '£3.50' },
  { id: 'earl-grey',        category: 'Hot Drinks', name: 'Earl Grey',            description: 'Aromatic black tea with bergamot oil. Delicate, citrus-floral, and timeless.',                                          price: '£3.50' },
  { id: 'chamomile',        category: 'Hot Drinks', name: 'Chamomile & Honey',    description: 'Gentle chamomile blossoms steeped with raw wildflower honey. Soothing and soft.',                                       price: '£3.50' },
  { id: 'turmeric-latte',   category: 'Hot Drinks', name: 'Turmeric Latte',       description: 'Golden turmeric and ginger blended with steamed oat milk and a pinch of black pepper.',                                 price: '£5.50' },

  // ── Pastries ──────────────────────────────────────────────────────────────
  { id: 'butter-croissant',  category: 'Pastries', name: 'Butter Croissant',  description: 'Classic laminated French croissant. Shatteringly flaky outside, pillowy soft inside.',                                      price: '£4.00' },
  { id: 'almond-croissant',  category: 'Pastries', name: 'Almond Croissant',  description: 'Twice-baked butter croissant filled with almond cream and topped with toasted flakes.',                                     price: '£5.50', badge: 'Popular' },
  { id: 'pain-au-chocolat',  category: 'Pastries', name: 'Pain au Chocolat',  description: 'Buttery laminated pastry wrapped around two batons of rich dark chocolate.',                                               price: '£5.00', badge: 'House Favourite' },
  { id: 'blueberry-muffin',  category: 'Pastries', name: 'Blueberry Muffin',  description: 'Moist, fluffy muffin bursting with fresh blueberries and a crunchy sugar top.',                                           price: '£4.50' },
  { id: 'cinnamon-roll',     category: 'Pastries', name: 'Cinnamon Roll',     description: 'Hand-rolled dough swirled with brown sugar and cinnamon, topped with cream cheese glaze.',                                 price: '£5.50', badge: 'Popular' },
  { id: 'banana-bread',      category: 'Pastries', name: 'Banana Bread',      description: 'Dense, moist loaf made with overripe bananas and a hint of vanilla. Sliced to order.',                                     price: '£4.50' },
  { id: 'chocolate-brownie', category: 'Pastries', name: 'Chocolate Brownie', description: 'Fudgy, dense dark chocolate brownie with a crackly top. Slightly gooey in the centre.',                                   price: '£5.00', badge: 'Popular' },
  { id: 'lemon-tart',        category: 'Pastries', name: 'Lemon Tart',        description: 'Buttery shortcrust shell filled with silky lemon curd. Bright, zesty, and elegant.',                                      price: '£5.50', badge: 'House Favourite' },
  { id: 'vanilla-scone',     category: 'Pastries', name: 'Vanilla Scone',     description: 'Classic British scone served with clotted cream and housemade strawberry jam.',                                            price: '£4.00' },
  { id: 'chocolate-eclair',  category: 'Pastries', name: 'Chocolate Eclair',  description: 'Choux pastry filled with vanilla custard cream and dipped in dark chocolate glaze.',                                     price: '£5.50' },

  // ── Sandwiches ────────────────────────────────────────────────────────────
  { id: 'avocado-toast',         category: 'Sandwiches', name: 'Avocado & Poached Egg Toast', description: 'Smashed avocado on toasted sourdough with a soft poached egg, chilli flakes, and lemon zest.',              price: '£11.00', badge: 'House Favourite' },
  { id: 'smoked-salmon-bagel',   category: 'Sandwiches', name: 'Smoked Salmon Bagel',         description: 'Toasted sesame bagel with cream cheese, smoked salmon, capers, and red onion.',                            price: '£13.00', badge: 'Popular' },
  { id: 'blt-club',              category: 'Sandwiches', name: 'BLT Club',                    description: 'Toasted brioche stacked with crispy streaky bacon, butter lettuce, and heirloom tomato.',                  price: '£12.00' },
  { id: 'chicken-pesto-panini',  category: 'Sandwiches', name: 'Chicken Pesto Panini',        description: 'Grilled ciabatta with roasted chicken, basil pesto, sundried tomatoes, and mozzarella.',                   price: '£13.00', badge: 'Popular' },
  { id: 'caprese-ciabatta',      category: 'Sandwiches', name: 'Caprese Ciabatta',            description: 'Fresh mozzarella, sliced heirloom tomato, and basil on toasted ciabatta with balsamic glaze.',             price: '£11.00' },
  { id: 'tuna-melt',             category: 'Sandwiches', name: 'Tuna Melt',                   description: 'House tuna salad with cheddar on toasted sourdough, grilled until golden and bubbling.',                   price: '£12.00' },
  { id: 'turkey-brie-croissant', category: 'Sandwiches', name: 'Turkey & Brie Croissant',     description: 'Roasted turkey and creamy brie with cranberry chutney in a toasted butter croissant.',                     price: '£13.00', badge: 'House Favourite' },
  { id: 'veggie-wrap',           category: 'Sandwiches', name: 'Roasted Veggie Wrap',         description: 'Herbed cream cheese and seasonal roasted vegetables wrapped in a toasted spinach tortilla.',               price: '£11.00' },
]

export function getItemsByCategory(category: Category): MenuItem[] {
  return menuItems.filter(item => item.category === category)
}

export function getFeaturedItems(): MenuItem[] {
  const featured = [
    'flat-white',
    'caramel-frappuccino',
    'almond-croissant',
    'nutella-mudslide',
    'chicken-pesto-panini',
    'lemon-tart',
  ]
  return featured
    .map(id => menuItems.find(item => item.id === id))
    .filter(Boolean) as MenuItem[]
}
