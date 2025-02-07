/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://vulnerax.com',
    generateRobotsTxt: true, 
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};