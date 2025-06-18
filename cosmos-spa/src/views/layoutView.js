import { html, render } from 'lit';

const rootElement = document.getElementById('rootElement')


const navigation = (body, ctx) => html`
<header>
           <div class="card-right">
       
        </div>
        
        <nav>
            <ul>
                        
                <li><a href="/">Home</a></li>        
                <li><a href="/planet/catalog">Catalog</a></li>
                <li><a href="/planet/search">Search</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/planet/create">Create</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>

    </header>
     <main>
    ${body}


    </main>

       
        <footer>
        <p>&copy; 2024 Cosmic Explorer. All rights reserved.</p>
    </footer>
      `




export default  function (ctx, next){
    // console.log(ctx.user);
    // console.log(ctx.isAuthenticated);

    ctx.render = (templateResult) => {
            render(navigation(templateResult, ctx), rootElement)
        };
        // const usr = await auth.currentUser;
        // console.log(usr.email)

    next();     
       
};