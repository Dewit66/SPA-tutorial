import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");    
    }

    async getHtml(){
        return `
            <h1>Welcome back, Done</h1>
            <p>
                Filler
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}