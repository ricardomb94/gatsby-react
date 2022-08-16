module.exports = {
    siteMetadata: {
        siteUrl: 'https://your.domain.com',
        name: 'MBK Ricardo',
        role: 'Developer at compagny',
    },
    plugins: [
        {
            resolve:'gatsby-source-filesystem',
            options:{
                name:'markdown-bio',
                path:`${__dirname}/MD/bio`
            },
        },
        'gatsby-transformer-remark', 
        'gatsby-plugin-postcss',
    ],
};