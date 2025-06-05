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

  get jumbleListCardHTMLTemplate() {
    return `
      <div class="col-3">
        <button class="" onclick="app.JumblesController.setActiveJumble('${this.id}')">Start</button>
      </div>
      <div id="card-title" class="col-9">${this.name}</div>
    `
  }

  get activeJumbleTemplate() {
    return `
      <div class="row border mb-3 rounded shadow">
            <div class="mt-4 fs-1 ms-3 mb-3">${this.name}</div>
            <div class="fs-4 ms-3 mb-3">${this.body}</div>
          </div>
          <div class="row border shadow rounded">
            <form onsubmit="app.jumblesController.submitAttempt()">
              <textarea class="col-12 form-control mt-3 bg-light" placeholder="Start Typing!!!" rows="10"></textarea>
              <button class="col-12 btn btn-teal mt-3">Submit</button>
            </form>
          </div>
    `
  }
}