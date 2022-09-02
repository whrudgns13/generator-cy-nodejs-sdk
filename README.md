# generator-cy-nodejs-sdk [![NPM version][npm-image]][npm-url]
> 

사전에 BTP의 계정, Nodejs, Cloud foundry cli가 필요합니다

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
- rootDir
    - approuter
    - security
    - sdk
    - web
```

## Approuter
```bash
approuter 어플리케이션의 진입점으로
frontend, backend의 /path를 정의
errorPage 처리, csrf 토큰보호, 페이지에 대한 사용자의 role 허가 등 
현재 User role을 부여해야 화면에 접근 가능하도록 했습니다.(xs-app.json)

배포시 환경변수에 session 타임을 지정할 수 있습니다.(manifest.yaml)
```

## SDK
```bash
sap clound sdk를 사용하여
sap business hub api를 사용할 수 있게합니다.
단 btp에 destination이 등록되어 있어야 합니다
```

## Security
```bash
apiaccess-xs-security.json = sap business hub api 사용 인증, destination 등록을 위한 파일
xs-security.json = application에 대한 인증 app role 설정을 정의
```

## Web
```bash
Role, RoleCollection, Users, CurrentUser를 화면에 구성해 CRUD작업이 가능하도록
템플릿을 만들어 놨습니다.
```
## Destination 등록
![tutorial-image]
![tutorial-image2]
![tutorial-image3]

## 계정에 Role 부여
![tutorial-image4]
CRUD 작업을 다 하실라면 ADMIN을 부여하시고 보기만 하실꺼면 USER를 부여하시면 됩니다.
![tutorial-image5]

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
[tutorial-image]: ./img/20220830_085620.png 
[tutorial-image2]: ./img/20220830_090023.png 
[tutorial-image3]: ./img/20220830_094340.png
[tutorial-image4]: ./img/20220830_093525.png
[tutorial-image5]: ./img/20220830_093553.png