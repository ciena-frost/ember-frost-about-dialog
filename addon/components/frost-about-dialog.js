import Ember from 'ember'
import layout from '../templates/components/frost-about-dialog'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['frost-about-dialog'],
  copyrightText: 'Copyright &copy; 2016 Ciena corporation, all rights reserved.',
  licenseText: '',
  type: 'company',
  brandingLogoPath: Ember.computed('type', function () {
    return `${this.get('type')}`
  }),
  brandingStripPath: Ember.computed('type', function () {
    return `${this.get('type')}-strip`
  }),
  actions: {
    cancel () {
      this.sendAction('dismiss')
    }
  }
})
