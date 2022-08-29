# generator-cy-nodejs-sdk [![NPM version][npm-image]][npm-url]
> 

> 안녕하세욥

사전에 BTP의 계정과 Nodejs가 필요합니다

## Installation

```bash
npm install -g yo
npm install -g generator-cy-nodejs-sdk
```

## Template 생성

```bash
yo cy-nodejs-sdk
```

## 프로젝트 초기화, BTP CF에 배포

```bash
cf login
cd <your dir>
npm run initProject
npm run deploy_all
```


## 폴더구조
```bash
rootDir
    approuter
    security
    sdk
    web
-------------
approuter 어플리케이션의 진입점
security에는 공통적으로 사용할 보안파일 xs-security.json이 들어있습니다
sdk에는 Open API를 사용할 REST API를 정의
web ui5
```


## xs-security.json
```bash
csrfProtection 속성으로 POST요청시 x-csrf-token을 보내야할지 설정할 수 있음
false면 보내지 않아도 통과
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [jokyounghun]()


[npm-image]: https://badge.fury.io/js/generator-cy-nodejs-sdk.svg
[npm-url]: https://npmjs.org/package/generator-cy-nodejs-sdk
[travis-image]: https://travis-ci.com/whrudgns13/generator-cy-nodejs-sdk.svg?branch=master
[travis-url]: https://travis-ci.com/whrudgns13/generator-cy-nodejs-sdk
[daviddm-image]: https://david-dm.org/whrudgns13/generator-cy-nodejs-sdk.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/whrudgns13/generator-cy-nodejs-sdk
[coveralls-image]: https://coveralls.io/repos/whrudgns13/generator-cy-nodejs-sdk/badge.svg
[coveralls-url]: https://coveralls.io/r/whrudgns13/generator-cy-nodejs-sdk
