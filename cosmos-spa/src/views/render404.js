import { html, render } from 'lit';
import { getErrorMessage } from '../../../cosmos-rest-server/src/utils/errorutils';


const template = (data) =>  html`
<div class="error-container">
            <h2>404</h2>
            Error code: ${data  ? data : "none"} 
            <p>Oops! The page you're looking for doesn't exist.</p>
            <p>It seems you've reached a black hole in the cosmos.</p>
            <a href="/">Go Back Home</a>
            <a href="/planet/catalog">Visit Catalog</a>
        </div> `;
  
  
  
export default function (ctx){

     const data = "err => improvised error handling"
     ctx.render (template(data));

};