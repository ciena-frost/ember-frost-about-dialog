import Ember from 'ember'

const {Controller} = Ember

export default Controller.extend({
  'dialogLicenseText':
  [
    'This is example license text, overriding the default license text in frost-about-dialog component.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
      ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
      ' aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
      ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in' +
      ' culpa qui officia deserunt mollit anim id est laborum.'
  ],
  'dialogServerMessage': ['Server Version: 5.0.0 257541', 'Client Version: 5.0.0'],
  'modalName': 'my-about-dialog'

})
