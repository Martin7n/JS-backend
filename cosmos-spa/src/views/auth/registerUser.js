
import { html, render } from 'lit';
import authApi from '../../api/authApi';
import page from 'page';
    
    
const template = () =>  html`<section class="register-form">
        <div class="container">
            <form class="register-form" 
            @submit=${(e) => {userRegister(e)}} 
            action="javascript:void(0);"
    >
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="username" value="">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password">
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="repass">
                </div>
                <button type="submit" class="btn">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>`



export default async function registerUser(ctx){
    const planetId = ctx.params.id;
    // const data = await planetsApi.getOne(planetId)
    // console.log(data)
      
    ctx.render(template())
};

async function userRegister(event) {
    const form = event.target;
     const formData = new FormData(form);
     const user = Object.fromEntries(formData);

    try {
        await authApi.register(user);

        page.redirect("/planet/catalog")

    } catch(err){
        alert(err)

     }
    
}


