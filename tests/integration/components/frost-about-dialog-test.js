import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import { initialize } from 'ember-block-slots/initializers/component-block-slots'
import {beforeEach} from 'mocha'
import $ from 'jquery'

describeComponent(
  'frost-about-dialog',
  'Integration: EmberFrostAboutDialogComponent',
  {
    integration: true
  },
  function () {
    let container, application

    beforeEach(function () {
      Ember.testing = true
      Ember.run(() => {
        application = Ember.Application.create()
        container = application.__container__
        application.deferReadiness()
      })
      initialize(container, application)
    })

    it('renders target', function () {
      this.render(hbs`{{#frost-about-dialog
        title='Product Name'
        message='Product tag line bacon ipsum color ametr turducken tial'
        serverMessage=dialogServerMessage
        licenseText=dialogLicenseText
        copyrightText='Copyright &copy; 2016 Company, all rights reserved.'
        logoPath='app/company'
        stripPath='app/company-strip'
        modalName='my-modal'
      }}
        {{#block-slot slot 'target'}}
          {{frost-button
            priority='primary'
            size='medium'
            text='About Dialog'
          }}
        {{/block-slot}}
      {{/frost-about-dialog}}`)

      expect(this.$('.frost-button .text').text()).to.equal('About Dialog')
    })

    it('opens', function () {
      this.render(hbs`{{#frost-about-dialog
        title='Product Name'
        message='Product tag line bacon ipsum color ametr turducken tial'
        serverMessage=dialogServerMessage
        licenseText=dialogLicenseText
        copyrightText='Copyright &copy; 2016 Company, all rights reserved.'
        logoPath='app/company'
        stripPath='app/company-strip'
        modalName='my-modal'
      }}
        {{#block-slot slot 'target'}}
          {{frost-button
            priority='primary'
            size='medium'
            text='About Dialog'
          }}
        {{/block-slot}}
      {{/frost-about-dialog}}`)

      this.$('.frost-button')[0].click()
      let length = $('[data-test-id="modalWindow"].remodal-is-opened').length ||
                    $('[data-test-id="modalWindow"].remodal-is-opening').length
      expect(length).to.equal(1)
    })
  }
)
