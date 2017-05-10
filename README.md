# react-web-typescript

1. install typescript:
```javascript
npm install typescript -g
```

2. install webpack
```javascript
npm install webpack -g
```

3. install cnpm
```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org
```


4. then npm install the other modules:
```javascript
cnpm i
```

5. start the server:
```javascript
// if you want to run development
npm run start
// if you want to run production
npm run prod
```
6. About the config, local.json is not exist in git command, when local.json exist in your project, webpack will bundle the loca.json, or not webpack will bundle the config.json as default setting.