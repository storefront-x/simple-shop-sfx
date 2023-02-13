import field from '#ioc/graphql/field'
import query from '#ioc/graphql/query'

export default () =>
  query()
    .variables({
      $id: 'String!',
    })
    .fields({
      categoryList: field()
        .args({ filters: { ids: { eq: '$id' } } })
        .fields({
          id: field(),
          name: field(),
          products: field({
            items: field({
              id: field(),
              name: field(),
              thumbnail: field({
                url: field(),
              }),
              categories: field({
                name: field(),
              }),
              price_range: field({
                minimum_price: field({
                  final_price: field({
                    value: field(),
                  }),
                }),
              }),
            }),
          }),
        }),
    })
