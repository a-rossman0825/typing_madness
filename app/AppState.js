import { Jumble } from './models/Jumble.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { generateId } from './utils/GenerateId.js';
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**  @type {Jumble} */
  activeJumble = null;


  /**  @type {import ('./models/Jumble.js').Jumble[]} */
  jumbles = [
    new Jumble({
      name: '🐘  Easy Jumble',
      body: "Elephants go forward in life remembering everything and everyone they've come across. To this end they're amazing!!",
    }),
    new Jumble({
      name: "🐧 Medium Jumble",
      body: "The gorilla juggled berries and grapes, adding them to the fruit salad one-by-one. As nimble as a spider monkey, the typist skillfully typed sentence after sentence.",
    }),
    new Jumble({
      name: "🦕 Hard Jumble",
      body: "Oranges, apples, and bananas danced together in the bowl, creating a harmonious fruit salad. With each keystroke, the orangutan got closer to becoming a typing virtuoso. Hungry for success? Keep peeling away at those keys until you're the fastest typist in the jungle!",
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())