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

      this.set('isAboutVisible', true)
      this.set('dialogType', 'company')
      this.set('dialogTitle', 'Product Name')
      this.set('dialogMessage', 'Product tag line bacon ipsum color ametr turducken tial')
      this.set('dialogServerMessage', ['Server Version: 5.0.0 257541', 'Client Version: 5.0.0'])
      this.set('dialogCopyrightText', 'Copyright &copy; 2016 Company, all rights reserved.')
      this.set('dialogLicenseText', [
        'This is example license text, overriding the default license text in frost-about-dialog component.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ])
      this.render(hbs`{{frost-about-dialog}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
