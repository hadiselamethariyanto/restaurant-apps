class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>               
                :host{
                    background-color: #2c3e50;
                    padding: 2em;
                    display:block;
                    text-align: center;
                }
                  
                :host ul {
                    margin: 0 auto;
                    display: inline-block;
                }
                
                :host li {
                    display: inline-block;
                    margin: 0 1em;
                    font-size: 14px;
                    color: #fff;
                }
                
                :host a {
                    display: inline-block;
                    padding: 1.3em;
                    text-decoration: none;
                    color: #fff
                }
            </style>
                <ul>
                    <li>Copyright © 2023 - Hadi Food's</li>
                </ul>
        `;
    }
}

customElements.define('my-footer', MyFooter);