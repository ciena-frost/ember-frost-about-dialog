import Ember from 'ember'
import layout from '../templates/components/frost-about-dialog'

const {Component, computed} = Ember

export default Component.extend({
  layout: layout,
  classNames: ['frost-about-dialog'],
  copyrightText: 'Copyright &copy; 2016 Ciena corporation, all rights reserved.',
  licenseText: '',
  type: 'company',

  brandingLogoPath: computed('type', function () {
    return `${this.get('type')}`
  }),
  brandingStripPath: computed('type', function () {
    return `${this.get('type')}-strip`
  }),

  actions: {
    cancel () {
      this.sendAction('dismiss')
    }
  }
})
