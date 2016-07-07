# 4.0.0
 **Added** support for latest `ember-frost-core` (icon packs in `frost-icon`)
 * **Changed** the `logoPath` and `stripPath` properties to `logoIcon` and `stripIcon` respectively
 * **Added** an `iconPack` property which allows setting the `pack` property on internal `frost-icon` components used in the dialog.
 * **Fixed** an issue where the class `frost-about-dialog` would be added to **all** `ember-remodel` modals when the about dialog launches. 

# 3.0.0
## Changed
- **BREAKING** Using [ember-remodal](http://sethbrasile.github.io/ember-remodal/) addon to simplify modal dialog support.

## Removed
- **BREAKING** Removed liquid-fire modal code. 
  - Removed the need to define/import transitions and configure the router.js file

## Upgrade notes
If you are upgrading your app to use this version, note the following - 
- Remove the modal declaration from your router.js file
- Remove any import statement from your modal component file that is importing transitions from frost-about-dialog
- Remove `{{liquid-modal}}` template code if you do not have any other liquid-fire modals in your app
- `frost-about-dialog` root template must use block-slots. See README for details of API.

