import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumblesService } from "../services/JumblesService.js";
import { setHTML } from "../utils/Writer.js";


export class JumblesController {
  constructor() {
    console.log('🎉');
    this.drawJumbleList()
    AppState.on('activeJumble', this.drawActiveJumble);
  }

  drawJumbleList(){
    const jumbleCards = AppState.jumbles
    let listContent = ""
    jumbleCards.forEach(card => listContent += card.jumbleListCardHTMLTemplate)
    setHTML('jumble-list', listContent)
  }

  setActiveJumble(jumbleId) {
    
    jumblesService.activeJumble(jumbleId);
    console.log('🍔');
  }

  drawActiveJumble() {
    const setActiveJumble = AppState.activeJumble;
    setHTML('active-card', setActiveJumble.activeJumbleTemplate)
  }
}