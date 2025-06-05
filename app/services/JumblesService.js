import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { loadState, saveState } from "../utils/Store.js";


class JumblesService {



  activeJumble(jumbleId) {

    const foundActiveJumble = AppState.jumbles.find((jumble) => jumble.id == jumbleId);
    AppState.activeJumble = foundActiveJumble;
    console.log("set dat ish");
  }

  createNewJumble(formData){
    const newJumble = new Jumble(formData)
    AppState.jumbles.push(newJumble)

    console.log('createnew');

  }

    saveJumbles() {
      saveState('jumbles', AppState.jumbles);
      console.log('saving this ish')

    }

    loadJumbles() {
      const loadedJumbles = loadState('jumbles', [Jumble]);
      if (loadedJumbles.length > 0) {
      AppState.jumbles = loadedJumbles;
      } else {
        console.log('no jumbles');
      }
    }
}

export const jumblesService = new JumblesService();