export default function () {
  this.transition(
    this.inHelper('liquid-modal'),
    this.toModal('frost-about-dialog'),
    this.use('explode',
      {
        pick: '.lm-container',
        use: ['fade']
      },
      {
        use: ['cross-fade']
      }
    )
  )
  this.transition(
    this.inHelper('liquid-modal'),
    this.fromModal('frost-about-dialog'),
    this.use('explode',
      {
        pick: '.lm-container',
        use: ['fade']
      },
      {
        use: ['cross-fade']
      }
    )
  )
}
