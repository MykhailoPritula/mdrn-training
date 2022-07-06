module.exports = (email, amount, url, ip, head, event_id) => {
  const
    bizSdk = require('facebook-nodejs-business-sdk'),
    Content = bizSdk.Content,
    CustomData = bizSdk.CustomData,
    DeliveryCategory = bizSdk.DeliveryCategory,
    EventRequest = bizSdk.EventRequest,
    UserData = bizSdk.UserData,
    ServerEvent = bizSdk.ServerEvent,
    access_token = 'EAAL0U7inZCDEBAKDrUv44NDb0hQ6XNkZCcKCZCWyzj7XFxZBDigPaN9ZAiFADWr5FsOBQZCngdE7wylwvLEMcYIFp4EcU6tsMNSu1t105vQZC8kZCJgK2ZAnNXjaZCyqCPTsyCHlPsYHNfHEZCZBRhAhd5ApqDDaQShC9bAezVxs5KN6ONLJUpgAPDBDIAeXG4OSixkZD',
    pixel_id = '714973849186887',
    api = bizSdk.FacebookAdsApi.init(access_token),
    current_timestamp = Math.floor(new Date() / 1000),
    userData = (new UserData())
      .setEmail(`${email}`)
      .setClientIpAddress(ip)
      .setClientUserAgent(head)
      .setFbp('fb.1.1558571054389.1098115397')
      .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890'),
    content = (new Content())
      .setId('Some burnit shit')
      .setQuantity(1),
    customData = (new CustomData())
      .setContents([content])
      .setCurrency('eur')
      .setValue(amount),
    serverEvent = (new ServerEvent())
      .setEventName('Purchase')
      .setEventId(event_id)
      .setEventTime(current_timestamp)
      .setUserData(userData)
      .setCustomData(customData)
      .setEventSourceUrl(`https://kne.burnittraining.com${url}`)
      .setActionSource('website'),
    eventsData = [serverEvent],
    eventRequest = (new EventRequest(access_token, pixel_id))
      .setEvents(eventsData);

  eventRequest.execute()
    .then(
      response => {
        console.log('Response: ', response)
      },
      err => {
        console.error('Error: ', err)
      }
    )
}