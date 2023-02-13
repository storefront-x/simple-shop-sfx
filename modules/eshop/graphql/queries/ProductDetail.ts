import field from '#ioc/graphql/field'
import query from '#ioc/graphql/query'

export default () =>
  query()
    .variables({ $id: 'String!' })
    .fields({
      products: field()
        .args({ filter: { id: { eq: '$id' } } })
        .fields({
          items: field({
            id: field(),
            name: field(),
            thumbnail: field({
              url: field(),
            }),
          }),
        }),
    })
