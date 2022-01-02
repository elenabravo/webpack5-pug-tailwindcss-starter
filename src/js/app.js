import '../css/global.css'
import { onDocumentReady, importAll } from './functions.js'

// import all images from ./src/assets
importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg|gif)$/))

onDocumentReady(function () {
  console.log('hello friend.')
})
