import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-about-dialog',
  'Integration: EmberFrostAboutDialogComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-about-dialog}}
      //     template content
      //   {{/frost-about-dialog}}
      // `)

      this.render(hbs`{{frost-about-dialog}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
