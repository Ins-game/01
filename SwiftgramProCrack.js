/*************************************

> 应用名称：Swiftgram
> 解锁功能：解锁订阅/会员
> 作者：Ins-game（根据 Nicegram 改写）
> 更新时间：2025-06-12
> ⚠️仅供学习参考，请勿用于商业用途！

[rewrite_local]
^https?:\/\/api\.swiftgram\.app\/v0\/settings url script-response-body https://raw.githubusercontent.com/Ins-game/01/main/swiftgramProCrack.js

[mitm]
hostname = api.swiftgram.app

**************************************/

var body = $response.body
  .replace(/"subscription":\w+/g, '"subscription":true')
  .replace(/"isPro":\w+/g, '"isPro":true')
  .replace(/"iCloudSubscription":\w+/g, '"iCloudSubscription":true');
$done({ body });
