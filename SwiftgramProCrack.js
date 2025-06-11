
var body = $response.body
  .replace(/"subscription":\w+/g, '"subscription":true')
  .replace(/"isPro":\w+/g, '"isPro":true')
  .replace(/"iCloudSubscription":\w+/g, '"iCloudSubscription":true');
$done({ body });
