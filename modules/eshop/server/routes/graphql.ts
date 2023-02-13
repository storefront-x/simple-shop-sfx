import MAGENTO_URL from '#ioc/config/MAGENTO_URL'

export default async (req: any, res: any) => {
  const response = await fetch(MAGENTO_URL + req.originalUrl)
  const json = await response.json()
  res.send(json)
}
