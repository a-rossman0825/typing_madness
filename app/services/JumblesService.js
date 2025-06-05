import { AppState } from "../AppState.js";


class JumblesService {

  

  activeJumble(jumbleId) {

    const foundActiveJumble = AppState.jumbles.find((jumble) => jumble.id == jumbleId);
    AppState.activeJumble = foundActiveJumble;
    console.log("set dat ish");
  }

}

export const jumblesService = new JumblesService();