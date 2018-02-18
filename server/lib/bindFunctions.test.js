import test from 'ava'

import bindFunctions from './bindFunctions'

test.beforeEach(t => {
  t.context.testMessage = 'test message'
})

test('bindFunctions works with objects', t => {
  const controller = {
    _init (message) {
      bindFunctions(this)

      this.message = message
      return this
    },

    sendMessage () {
      return this.message
    }
  }

  const { testMessage } = t.context
  const ctrl = controller._init(testMessage)
  const sendMessage = ctrl.sendMessage

  t.is(sendMessage(), testMessage)
})

test('bindFunctions works with classes', t => {
  class Controller {
    constructor (message) {
      bindFunctions(this)

      this.message = message
    }

    sendMessage () {
      return this.message
    }
  }

  const { testMessage } = t.context
  const ctrl = new Controller(testMessage)
  const sendMessage = ctrl.sendMessage

  t.is(sendMessage(), testMessage)
})
