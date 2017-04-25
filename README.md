# react-web-typescript

1.install typescript:
```javascript
npm install typescript -g
```

2.install webpack
```javascript
npm install webpack -g
```

3.create tsconfig.json
```javascript
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "paths": {
      "src": ["./src"],
      "root": ["."]
    },
    "baseUrl": "./"
  },
  "files": [
    "./src/index.tsx",
    "./js_transition.d.ts"
  ],
  "include": [
    "./src/**/*"
  ]
}
```

4.install cnpm
```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org
```


5. then npm install the other modules:
```javascript
cnpm i
```

6. start the server:
```javascript

// if you want to run development
npm run start

// if you want to run production
npm run prod

// other development
npm run start

// other development
npm start

```