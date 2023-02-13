import field from '#ioc/graphql/field'
import query from '#ioc/graphql/query'

export default () =>
  query({
    categoryList: field({
      name: field(),
      children: field({
        id: field(),
        name: field(),
      }),
    }),
  })
