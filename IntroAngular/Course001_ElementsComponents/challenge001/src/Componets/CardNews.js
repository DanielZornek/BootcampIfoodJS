/*

class CardNews extends HTMLElement{
    
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello Daniel</h1>";
    }
}

customElements.define("card-news", CardNews);

*/

class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode:"open"} );
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By "+(this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        linkTitle.target = "_blank";

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        newsImage.src = this.getAttribute("photo") || "./assets/foto-default.png";
        newsImage.alt = "Foto da Notícia";
        newsImage.title = "Foto da Notícia";
        newsImage.classList.add("card__right-img");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 100%;
                /* border: 1px solid #000; */
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                max-width: 95vw;
                margin: 20px auto;
                padding: 20px;
                border-radius: 1rem;
                box-shadow: 23px 24px 43px -11px rgba(28,28,28,0.75);
                -webkit-box-shadow: 23px 24px 43px -11px rgba(28,28,28,0.75);
                -moz-box-shadow: 23px 24px 43px -11px rgba(28,28,28,0.75);
            }
            
            /*
            .card__left, .card__right{
                border: 1px solid blue;
            }
            */
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > span{
                font-weight: 400;
            }
            
            .card__left > a{
                margin-top: 15px;
                font-size: 25px;
                font-weight: bold;
                text-decoration: none;
                color: rgb(132, 112, 150);
            }
            
            .card__left > a:hover{
                text-decoration: underline;
            }
            
            .card__left > p{
                color: rgb(70, 70, 70);
            }

            .card__right-img{
                width: 300px;
                border-radius: 1rem;
            }
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);