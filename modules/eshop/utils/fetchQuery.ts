import IS_SERVER from '#ioc/config/IS_SERVER'
import MAGENTO_URL from '#ioc/config/MAGENTO_URL'
import objectToQuery from '@storefront-x/base/utils/url/objectToQuery'

const BASE_URL = IS_SERVER ? MAGENTO_URL : ''

export default async (gql: any) => {
  const query = objectToQuery({
    query: gql.toString(),
    variables: gql.getVariables(),
  })

  const response = await fetch(BASE_URL + `/graphql?${query}`)
  const json = await response.json()

  return json.data
}
