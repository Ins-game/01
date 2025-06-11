/***********************************
> 应用名称：Swiftgram
> 解锁功能：会员订阅 / Pro
> 作者：Ins-game
> 更新时间：2025-06-12

[rewrite_local]
^https?:\/\/api\.swiftgram\.app\/v0\/settings url script-response-body https://raw.githubusercontent.com/Ins-game/01/main/SwiftgramProCrack.js

[mitm]
hostname = api.swiftgram.app
***********************************/

var body = $response.body
  .replace(/"subscription":\w+/g, '"subscription":true')
  .replace(/"isPro":\w+/g, '"isPro":true')
  .replace(/"iCloudSubscription":\w+/g, '"iCloudSubscription":true');
$done({ body });
