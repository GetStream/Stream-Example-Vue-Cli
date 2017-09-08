// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf
// with an alias. Loading occurs via babel; set in webpack.base.conf.
import Vue from 'vue'

// Global jQuery is a Foundation dependency
import jQuery from 'jquery'
window.$ = jQuery
// Foundation is loaded via babel; set in webpack.base.conf.
import Foundation from 'foundation-sites'
window.Foundation = Foundation

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
