/**
 * A component for rendering a frosty about dialog
 */

import Ember from 'ember'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

import layout from '../templates/components/frost-about-dialog'

const {Component, inject} = Ember

export default Component.extend(PropTypeMixin, {
  // ==========================================================================
  // Dependencies
  // ==========================================================================

  remodal: inject.service(),

  // ==========================================================================
  // Properties
  // ==========================================================================

  layout,

  propTypes: {
    copyrightText: PropTypes.string,
    iconPack: PropTypes.string.isRequired,
    licenseText: PropTypes.string,
    logoIcon: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    modalName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    serverMessage: PropTypes.string.isRequired,
    stripIcon: PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      copyrightText: '',
      iconPack: 'frost',
      licenseText: ''
    }
  },

  // ==========================================================================
  // Computed Properties
  // ==========================================================================

  // ==========================================================================
  // Functions
  // ==========================================================================

  // ==========================================================================
  // Events
  // ==========================================================================

  // ==========================================================================
  // Actions
  // ==========================================================================

  actions: {
    close () {
      this.get('remodal').close(this.get('modalName'))
    }
  }
})
