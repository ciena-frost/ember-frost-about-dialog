import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('demo', { path: '/' }, function () {
    this.modal('frost-about-dialog', {
      withParams: 'isAboutVisible',
      dialogClass: 'frost-about-dialog',
      otherParams: [
        { dialogType: 'type' },
        { dialogTitle: 'title' },
        { dialogMessage: 'message' },
        { dialogServerMessage: 'serverMessage' },
        { dialogCopyrightText: 'copyrightText' },
        { dialogLicenseText: 'licenseText' }
      ],
      actions: {
        confirm: 'dialogConfirmed'
      }
    })
  })
})

export default Router
