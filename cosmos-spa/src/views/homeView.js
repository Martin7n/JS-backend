import { html, render } from 'lit';
// import { loggedUser  } from '../api/auth.js'
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase.js';


const template = () =>  html`
        <section class="intro">
            <h2>Discover the vastness of space</h2>
            <p>From mysterious gas giants to small but intriguing rocky planets, discover the secrets of space with us.
            </p>
            <a href="/planet/catalog" class="cta-btn">Browse the catalog</a>
        </section>

    `;
  
  
  
export default function (ctx){

     ctx.render (template());

};