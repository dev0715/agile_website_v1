# agiletestware

> Agiletestware Landing Page

## S3 Credential Info
> **server/app.js**

> **AWS.config.update({accessKeyId: 'Here is access key ID', secretAccessKey: 'Here is secret access key'});**

## Run Project(Production)
> npm start

## Develop Setup
``` bash
# open one terminal and run
npm start
# open another terminal and run
npm run dev

> You can see update on localhost:8081 after you change code.
```

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Google Site Verification

Google requires websites to have certain .html files available at root for ownership verification (See <https://support.google.com/webmasters/answer/35179?hl=en>). The site verification files should be placed in the folder `google-verification` and will be automatically copied by Webpack to the root with their path and file pattern configured in `config/index.js`.

## Generate Sitemap

A sitemap is generated by Webpack on each build to create the files `sitemap.xml` and `sitemap.xml.gz` at website root. The specifications of sitemap is defined in `config/sitemap.js` and the paths need to be manually added and updated for now.