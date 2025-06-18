import { html, render } from 'lit';


const template = () =>  html`<section class="login-hero">
        <div class="container">
            <h2>Login to Your Account</h2>
            <p>Access your order history, track orders, and more.</p>
        </div>
    </section>

    <section class="login-form">
        <div class="container">
            <form action="#" 
            @submit=${(e) => {userLogin(e)}} 
            action="javascript:void(0);"
            >
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password">
                </div>
                <button type="submit" class="btn">Login</button>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    </section>`



export default async function loginUser(ctx){
    const planetId = ctx.params.id;
    // const data = await planetsApi.getOne(planetId)
    // console.log(data)
      
    ctx.render(template())
};

async function userLogin(event) {

    const form = event.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData);

    try {
        await authApi.login(user);

        page.redirect("/planet/catalog")

    } catch(err){
        alert(err)

     }
    
};

    

