import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class JumblesController {
  constructor() {
    console.log('🎉');
    this.drawJumbleList()
    AppState.on('activeJumble', this.drawActiveJumble);
    AppState.on('jumbles', this.drawJumbleList);
    AppState.on('jumbles', jumblesService.saveJumbles);
    jumblesService.loadJumbles();
  }

  drawJumbleList(){

    const jumbleCards = AppState.jumbles
    let listContent = ""
    jumbleCards.forEach(card => listContent += card.jumbleListCardHTMLTemplate)
    setHTML('jumble-list', listContent)
    console.log('drawlist')
  }

  setActiveJumble(jumbleId) {
    
    jumblesService.activeJumble(jumbleId);
    console.log('🍔');
  }

  drawActiveJumble() {
    const setActiveJumble = AppState.activeJumble;
    setHTML('active-card', setActiveJumble.activeJumbleTemplate)
  }

  getNewJumbleData(){
    event.preventDefault();
    const form = document.getElementById("new-jumble")
    const formData = getFormData(form)
    
    jumblesService.createNewJumble(formData);


    console.log('getNewData controller')
  }
}