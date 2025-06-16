import { html, render } from 'lit';

const rootElement = document.getElementById('rootElement')


const navigation = (body, ctx) => html`
<header>
        <nav>
            <ul>
                        <style background-color: white;>
<li><a href="#">Home</a></li>        </style>
                <li><a href="#">Catalog</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>

    </header>
     <main>
    ${body}
      `




export default  function (ctx, next){
    // console.log(ctx.user);
    // console.log(ctx.isAuthenticated);
    console.log("CTX WHATEVER")

    ctx.render = (templateResult) => {
            render(navigation(templateResult, ctx), rootElement)
        };
        // const usr = await auth.currentUser;
        // console.log(usr.email)

    next();     
       
};