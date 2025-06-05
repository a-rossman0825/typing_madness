import { generateId } from "../utils/GenerateId.js";


export class Jumble {
  constructor(data) {
    this.id = generateId();
    this.name = data.name;
    this.body = data.body;

    //worry about these later
    this.fastestTime = null;
    this.startTime = null;
    this.endTime = null;
  }

  get ListTemplate() {
    return `
    <li>${this.name}</li>`;
  }
}