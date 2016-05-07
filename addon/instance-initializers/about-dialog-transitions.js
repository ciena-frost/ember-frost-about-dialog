import aboutDialogTransitions from 'ember-frost-about-dialog/transitions'

export function initialize (appInstance) {
  const transitionService = appInstance.lookup('service:liquid-fire-transitions')
  transitionService.map(aboutDialogTransitions)
}

export default {
  name: 'about-dialog-transition',
  after: 'global-instance',
  initialize: initialize
}
