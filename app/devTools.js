'use strict'

import { enableLiveReload } from 'electron-compile'
import electronDebug from 'electron-debug'

module.exports = function devTools () {
  enableLiveReload()
  electronDebug({
    showDevTools: true
  })
}
