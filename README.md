# Storefront X Shop

This is a simple e-shop implementation in Storefront X.
It's equivalent implementation in Nuxt 3 can be found [here](https://github.com/storefront-x/simple-shop-nuxt).

The main difference is that Nuxt 3 implementation has all directories inside the repository root,
while Storefront X implementation has everything inside one module called eshop.

## Advantages

* Smaller bundle size (102 kB without GZip)
* Consistent imports
* Overriding (+ extending) for everything

## Disadvantages

* Currently missing simple way of executing GraphQL queries without using the useMagento composable
  * Simple fetchQuery utility function was written for this demo
* File-based router does not support all of the Nuxts file-based router features
  * Animated transitions
  * Route params spreads (e.g. `pages/product/[...parts].vue`)
