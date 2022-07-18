module.exports = {
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [/\.vue$/]
      }
    ]
  ],
  extends: ['stylelint-config-recommended', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss']
}
