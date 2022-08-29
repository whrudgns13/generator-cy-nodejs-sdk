'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the CY DS Team ${chalk.red('Btp open api connect SDK template!')}`
      )
    );

    const prompts = [
      {
        name: 'rootDir',
        message: 'Your root dir name?',
        default : 'btp-api-connect-SDK-template'
      },
      {
        name: 'domain',
        message: 'Your Subaccount domain?',
      },
      {
        name: 'region',
        message: 'Your Subaccount Region?',
        default: 'us10'
      },
      {
        name: 'SDKName',
        message: 'Your SDKName name?',
        default: "cy-sdk"
      },
      {
        name: 'appNameSpace',
        message: 'Your application name?',
        default: "ui5"
      },
      {
        name: 'ui5ProjectName',
        message: 'Your ui5 project name?',
        default: "myUI5App"
      },
      {
        name: 'ui5Namespace',
        message: 'Which namespace do you want to use?',
        default: "com.myorg"
      },
      {
        name: 'approuterName',
        message: 'Your approuter name?',
        default: "cy-approuter"
      },
      {
        name: 'apiXsuaaName',
        message: 'Your apiaccess xsuaa sevice name?',
        default: "api-xsuaa-security"
      },
      {
        name: 'appXsuaaName',
        message: 'Your application xsuaa sevice name?',
        default: "app-xsuaa-security"
      },
      {
        name: 'destinationName',
        message: 'Your destination sevice name?',
        default: "my-destination"
      },
      {
        name: 'connectivityDestinationName',
        message: 'Your connectivity destination name?',
        default: "apiAccessDestination"
      },
    ];

    //props로 값이 담겨옴 prompts의 name으로 접근 this.props.name
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }
  
  //폴더생성
  default() {
    mkdirp(this.props.rootDir);
    this.destinationPath(this.props.rootDir);
  }

  writing() {
    const rootDir = this.props.rootDir;
    
    this.fs.copyTpl(
      this.templatePath(`sdk`),
      this.destinationPath(`${rootDir}/sdk`),
      {
        domain : this.props.domain,
        region : this.props.region,
        SDKName : this.props.SDKName,
        appXsuaaName: this.props.appXsuaaName,
        destinationName : this.props.destinationName,
        connectivityDestinationName : this.props.connectivityDestinationName,
      }
    );

    this.fs.copyTpl(
      this.templatePath(`approuter`),
      this.destinationPath(`${rootDir}/approuter`),
      {
        domain : this.props.domain,
        region : this.props.region,
        SDKName : this.props.SDKName,
        appNameSpace : this.props.appNameSpace,
        appXsuaaName: this.props.appXsuaaName,
        approuterName : this.props.approuterName
      }
    );
    
    this.fs.copyTpl(
      this.templatePath(`security`),
      this.destinationPath(`${rootDir}/security`),
      { 
        appXsuaaName: this.props.appXsuaaName,
        apiXsuaaName: this.props.apiXsuaaName
      }
    );

    this.fs.copyTpl(
      this.templatePath(`web`),
      this.destinationPath(`${rootDir}/web`),
      {
        ui5ProjectName : this.props.ui5ProjectName,
        ui5Namespace : this.props.ui5Namespace,
        domain : this.props.domain,
        region : this.props.region,
        appNameSpace : this.props.appNameSpace,
        appXsuaaName: this.props.appXsuaaName
      }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`${rootDir}/package.json`),
      {
        rootDir,
        appXsuaaName: this.props.appXsuaaName,
        apiXsuaaName: this.props.apiXsuaaName,
        destinationName : this.props.destinationName,
      }
    );
    
  }
};
