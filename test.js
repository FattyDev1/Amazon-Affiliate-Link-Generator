const amazonlink = require('ezamazonaffiliate')

const affiliatelink = amazonlink('https://www.amazon.com/HP-24mh-FHD-Monitor-Built/dp/B08BF4CZSV/?_encoding=UTF8&pd_rd_w=h7hw5&pf_rd_p=396c0314-c1f6-41c2-b37b-91540c07423f&pf_rd_r=QZ9DCTCS6A0RBRMYQ44Q&pd_rd_r=cda5ad1d-0fbd-4ed0-ab67-c35b29c5ec68&pd_rd_wg=6mlX4&ref_=pd_gw_ci_mcx_mr_hp_atf_m', 'pickitly0b-20') // returns https://www.amazon.com/dp/B08BF4CZSV/?tag=pickitly0b-20

console.log(affiliatelink)