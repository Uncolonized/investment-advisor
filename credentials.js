/* Copyright IBM Corp. 2015
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {

  // MongoDB
  database: {
  "db_type": "mongodb",
  "name": "bmix_dal_yp_074d3687_223d_4019_8809_8fc0f5c6ab01",
  "uri_cli": "mongo --ssl --sslAllowInvalidCertificates sl-us-dal-9-portal.0.dblayer.com:16444/admin -u admin -p XYDNJAXLTJUHKBXE",
  "ca_certificate_base64": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURlekNDQW1PZ0F3SUJBZ0lFV0JvYkFqQU5CZ2txaGtpRzl3MEJBUTBGQURBL01UMHdPd1lEVlFRREREUnoKWjJGNVlXMWhjbXRBWjIxaGFXd3VZMjl0TFdNM1l6VmhZVFUzWTJWak1qQXdZakZqTXpOak16UXpOVEEyTWpZMQpZVGRrTUI0WERURTJNVEV3TWpFMk5UY3pPRm9YRFRNMk1URXdNakUyTURBd01Gb3dQekU5TURzR0ExVUVBd3cwCmMyZGhlV0Z0WVhKclFHZHRZV2xzTG1OdmJTMWpOMk0xWVdFMU4yTmxZekl3TUdJeFl6TXpZek0wTXpVd05qSTIKTldFM1pEQ0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUtsNWJHUFcySFNmT1FvawptYWZBMXIvdW5CdTJoampCZnNTWVhzemo1S1hRaXRXTGl5djlCbjRveTFpeVY0UTZHV21TRTlCUFBjalhqSzIrCkJsUzVwSm1nMDBFVFJVRFAwWGxlQTg0aGUvMk1TK3lmckN0T2NEeHN3YWpqWTl6QjdYQ1dXVUYxTXU5NlgyMzkKeDdOd0YySmRlQ1FLSmlrRnJ6bzBRck1ZajduaWJpWGtGWXpWWTVjYTlHWUxVZTJjOHN4WVJ0ZGZJRnpCYUZYTApFSVpRVDJEVnhUOXYzRWZyUUY1akRKNW9QbW5KbmdjWTlzV2NSQWtXRGNJV1YzY2JBTzd3WnNKUnZLc1J1VGEvCkdkVG9sOXV4Zm44RUVWYXFNYlFBczNYVUEwL0FaV2JKMTBMRk9ndzIyOHZrQkg1VEJJSUIyejZTL2xMcHRwZ0oKam5xRm01c0NBd0VBQWFOL01IMHdIUVlEVlIwT0JCWUVGTDhKV3NCR2Fudit5bjZCcjRhQ0JTR3NIUEMyTUE0RwpBMVVkRHdFQi93UUVBd0lDQkRBZEJnTlZIU1VFRmpBVUJnZ3JCZ0VGQlFjREFRWUlLd1lCQlFVSEF3SXdEQVlEClZSMFRCQVV3QXdFQi96QWZCZ05WSFNNRUdEQVdnQlMvQ1ZyQVJtcDcvc3ArZ2ErR2dnVWhyQnp3dGpBTkJna3EKaGtpRzl3MEJBUTBGQUFPQ0FRRUFDdnp6cTFFN3VPZGI2bTNkRFNzWTNKQ3gwYTBRNForems1Mjk2djRIQlI1OQp1NTRpSmNUV2V3NktYUE4yTEtEQUVPQnNaSlFGK3gxK3ZiOEF0KzB0RC82RUhqQnF1Q05vT1ZQSXhDa0NxcGVXCjcrSmdLdVR2R0p2eHAxSzdSTXIzUlNmdThDNU5NOEdmdXBmM1NUZkdOWi9QS2Q1NDN4dHRveS9kQkhaQWFRS2EKbmNyUFptT0JXT242NXl5em5sTzdkZDNDTEVxbjZacmhvcDJ1Wjl1dXpJbWUxeW94cTE1ZDFpKy8rWVcrMnhlVQpRaEVvdUkwUjhOaVl5ckx1TUNaNjZJQmxScWVCU1lFbmZvOVhITTBjTmVEbi9MKy9naHZPMGorcTNQeElCKy94ClBOODFiWUliS0dYVjFQQmtyaUlNanc1enhwQUxtWGZTUFl2SW11RTJVZz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
  "deployment_id": "581a1afbda57940017000002",
  "uri": "mongodb://admin:XYDNJAXLTJUHKBXE@sl-us-dal-9-portal.0.dblayer.com:16444/admin?ssl=true"
  },

  tradeoff_analytics : {
    username : process.env.TRADEOFF_ANALYTICS_USERNAME || '<username>',
    password : process.env.TRADEOFF_ANALYTICS_PASSWORD || '<password>',
    version  : 'v1'
  },

  personality_insights : {
    username : process.env.PERSONALITY_INSIGHTS_USERNAME || '<username>',
    password : process.env.PERSONALITY_INSIGHTS_PASSWORD || '<password>',
    version  : 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: process.env.TWITTER ? JSON.parse(process.env.TWITTER) : [
    {
      consumer_key :        '<consumer_key>',
      consumer_secret  :    '<consumer_secret>',
      access_token_key :    '<access_token_key>',
      access_token_secret : '<access_token_secret>',
      enabled : false // Disabled since this is just an example
    }
  ]
};
