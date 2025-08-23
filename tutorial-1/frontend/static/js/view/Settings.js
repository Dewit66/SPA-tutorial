import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");    
    }

    async getHtml(){
        return `
            <h1>Settings</h1>
            <p>
                You are in settings
            </p>
        `;
    }
}