import Ember from 'ember'
import layout from '../templates/components/frost-about-dialog'

const {Component, inject} = Ember

export default Component.extend({
  remodal: inject.service(),

  layout,
  copyrightText: 'Copyright &copy; 2016 Ciena corporation, all rights reserved.',
  licenseText: '',

  didRender () {
    Ember.$('.ember-remodal.window').addClass('frost-about-dialog')
  },

  actions: {
    close () {
      this.get('remodal').close(this.get('modalName'))
    }
  }
})
