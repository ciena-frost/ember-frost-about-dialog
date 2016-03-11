module.exports = [
  {
    id: 'demo',
    alias: 'Demo',
    type: 'route',
    route: 'demo',
    path: {
      path: '/'
    },
    modalName: 'frost-about-dialog',
    modal: {
      withParams: 'isAboutVisible',
      dialogClass: 'frost-bunsen-form-dialog',
       otherParams: [
        { dialogType: 'company' },
        { dialogTitle: 'title' },
        { dialogMessage: 'message' },
        { dialogServerMessage: 'serverMessage' },
        { dialogCopyrightText: 'copyrightText' },
        { dialogLicenseText: 'licenseText' }
      ],
      actions: {
        save: 'dialogConfirmed'
      }
    }
  }
]
