[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-about-dialog.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-about-dialog

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-about-dialog.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-about-dialog

[npm-img]: https://img.shields.io/npm/v/ember-frost-about-dialog.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-about-dialog

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-about-dialog
A simple 'About' modal dialog using [ember-remodal](http://sethbrasile.github.io/ember-remodal/#/components)

 * [Installation](#installation)
 * [API](#api)
 * [Examples](#examples)
 * [Development](#development)

## Installation
```
ember install ember-frost-about-dialog
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `modalName` | `string` |  | Required name of the about modal |
| `title` | `string` |  | Name of product |
| `message` | `string` |  | Product tag line for about dialog |
| `serverMessage` | `array` |  | Array of strings - Message from the server |
| `copyrightText` | `array` |  | Array of Copyright text string where array items are separated by line breaks |
| `logoPath` | `string` |  | Path to logo svg |
| `stripPath` | `string` |  | Path to branding strip svg |
| `licenseText` | `array` |  | Array of license text string where array items are separated by line breaks |
| `target` | `block-slot` | <ember-block-slot template> | Block-slot template to yield the element that will launch the dialog on click |


## Examples
```handlebars
{{#frost-about-dialog
  title='Product Name'
  message='Product tag line bacon ipsum color ametr turducken tial'
  serverMessage=dialogServerMessage
  licenseText=dialogLicenseText
  copyrightText='Copyright &copy; 2016 Company, all rights reserved.'
  logoPath='app/company'
  stripPath='app/company-strip'
  modalName=modalName
}}
  {{#block-slot slot 'target'}}
    {{frost-button
      priority='primary'
      size='medium'
      text='Launch About Dialog'
    }}
  {{/block-slot}}
{{/frost-about-dialog}}

```    

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-about-dialog.git
cd ember-frost-about-dialog
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-about-dialog/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
