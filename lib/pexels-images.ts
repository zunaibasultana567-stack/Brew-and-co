import type { Category } from './menu-data'

// ── Section hero images ─────────────────────────────────────────────────────
export const HERO_HOME   = '/images/home-hero.webp'
export const HERO_ABOUT  = '/images/about-hero.jpg'
export const HERO_MENU   = '/images/menu-hero.webp'

// ── Founder portraits ────────────────────────────────────────────────────────
export const PORTRAIT_SOPHIE = '/images/portrait-sophie.webp'
export const PORTRAIT_JAMES  = '/images/portrait-james.webp'

// ── Gallery (About page strip) ───────────────────────────────────────────────
export const GALLERY = [
  '/images/latte.webp',
  '/images/gallery-barista.webp',
  '/images/hazelnut-mocha.webp',
  '/images/macchiato.webp',
]

// ── Events ───────────────────────────────────────────────────────────────────
export const EVENT_OPEN_MIC  = '/images/event-open-mic.webp'
export const EVENT_TASTING   = '/images/event-tasting.webp'
export const EVENT_LATTE_ART = '/images/event-latte-art.webp'

// ── Per-item image overrides (bypass pool for specific items) ─────────────────
const ITEM_IMAGE_OVERRIDES: Record<string, string> = {
  'flat-white':         '/images/flat-white.webp',
  'latte':              '/images/latte.webp',
  'caramel-latte':      '/images/caramel-latte.jpg',
  'hazelnut-mocha':     '/images/hazelnut-mocha.webp',
  'cortado':            '/images/cortado.webp',
  'macchiato':          '/images/macchiato.webp',
  'espresso-con-panna': '/images/espresso-con-panna.webp',
  'dirty-chai':         '/images/dirty-chai.avif',
  'cold-brew':          '/images/cold-brew.avif',
  'nitro-cold-brew':    '/images/nitro-cold-brew.avif',
  'iced-cappuccino':         '/images/iced-cappuccino.avif',
  'iced-caramel-macchiato': '/images/iced-caramel-macchiato.avif',
  'caramel-frappuccino':    '/images/caramel-frappuccino.avif',
  'nutella-mudslide':       '/images/nutella-mudslide.jpg',
  'chocolate-shake':        '/images/chocolate-shake.avif',
  'vanilla-bean-frappe':    '/images/vanilla-bean-frappe.avif',
  'iced-matcha':            '/images/iced-matcha.avif',
  'strawberry-lemonade':    '/images/strawberry-lemonade.avif',
  'hot-chocolate':          '/images/hot-chocolate.avif',
  'matcha-latte':           '/images/matcha-latte.avif',
  'chai-latte':             '/images/chai-latte.avif',
  'london-fog':             '/images/london-fog.png',
  'english-breakfast':      '/images/english-breakfast.avif',
  'earl-grey':              '/images/earl-grey.jpg',
  'chamomile':              '/images/chamomile.jpg',
  'turmeric-latte':         '/images/turmeric-latte.avif',
  'butter-croissant':       '/images/butter-croissant.avif',
  'almond-croissant':       '/images/almond-croissant.avif',
  'pain-au-chocolat':       '/images/pain-au-chocolat.avif',
  'blueberry-muffin':       '/images/blueberry-muffin.avif',
  'cinnamon-roll':          '/images/cinnamon-roll.avif',
  'banana-bread':           '/images/banana-bread.avif',
  'chocolate-brownie':      '/images/chocolate-brownie.avif',
  'lemon-tart':             '/images/lemon-tart.avif',
  'vanilla-scone':          '/images/vanilla-scone.avif',
  'chocolate-eclair':       '/images/chocolate-eclair.avif',
  'avocado-toast':          '/images/avocado-toast.avif',
  'smoked-salmon-bagel':    '/images/smoked-salmon-bagel.avif',
  'blt-club':               '/images/blt-club.jpg',
  'chicken-pesto-panini':   '/images/chicken-pesto-panini.avif',
  'caprese-ciabatta':       '/images/caprese-ciabatta.avif',
  'tuna-melt':              '/images/tuna-melt.avif',
  'turkey-brie-croissant':  '/images/turkey-brie-croissant.avif',
  'veggie-wrap':            '/images/veggie-wrap.avif',
}

// ── Homepage popular cards ────────────────────────────────────────────────────
export const POPULAR_IMAGES: Record<string, string> = {
  'flat-white':           '/images/popular-flat-white.webp',
  'caramel-frappuccino':  '/images/popular-caramel-frappuccino.webp',
  'almond-croissant':     '/images/popular-almond-croissant.webp',
  'nutella-mudslide':     '/images/popular-nutella-mudslide.webp',
  'chicken-pesto-panini': '/images/popular-chicken-pesto.webp',
  'lemon-tart':           '/images/popular-lemon-tart.webp',
}

// ── Category image pools (fallback when item has no specific override) ────────
const CATEGORY_POOLS: Record<Category, string[]> = {
  'Espresso Drinks': ['/images/latte.webp',       '/images/cortado.webp',    '/images/macchiato.webp',  '/images/hazelnut-mocha.webp'],
  'Cold Drinks':     ['/images/pool-cold-1.webp', '/images/popular-caramel-frappuccino.webp', '/images/pool-cold-3.webp', '/images/pool-cold-4.webp'],
  'Hot Drinks':      ['/images/pool-hot-1.webp',  '/images/pool-hot-2.webp', '/images/pool-hot-3.webp', '/images/pool-hot-4.webp'],
  'Pastries':        ['/images/popular-almond-croissant.webp', '/images/pool-pastry-2.webp', '/images/pool-pastry-3.webp', '/images/popular-lemon-tart.webp'],
  'Sandwiches':      ['/images/pool-sandwich-1.webp', '/images/popular-chicken-pesto.webp', '/images/pool-sandwich-3.webp', '/images/pool-sandwich-4.webp'],
}

export function getItemImage(category: Category, index: number, itemId?: string): string {
  if (itemId && ITEM_IMAGE_OVERRIDES[itemId]) return ITEM_IMAGE_OVERRIDES[itemId]
  const pool = CATEGORY_POOLS[category]
  return pool[index % pool.length]
}

export function getItemImageUrl(itemId: string): string { return '' }
export function getPopularItemImageUrl(itemId: string): string { return '' }
