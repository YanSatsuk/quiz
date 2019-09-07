const STATE = {
    sign_in: {
        url: '/signin',
        value: 'Sign In',
    },
    sign_up: {
        url: '/signup',
        value: 'Sign Up',
    },
};

class SignForm {
    render_sign_in_form() {
        return this._render(STATE.sign_in);
    }

    render_sign_up_form() {
        return this._render(STATE.sign_up);
    }

    _render(state) {
        return `
        <div class="sign-from">
            <h3 class="text-center">${state.value} Form</h3>
            <form id="sign-form">
                <label for="login">Login</label>
                <br>
                <input 
                    type="text" 
                    id="login" 
                    name="login"
                    class="sign-from--login" 
                    placeholder="Login" 
                    required>
                <br>
                <label for="login">Password</label>
                <br>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password"  
                    pattern=".{6,}" 
                    title="Password at least 6 characters"
                    required>
                <br>
                <input 
                    class="sign-from--url"
                    id="sign_url" 
                    name="url" 
                    value="${state.url}">
                <div class="sign-from--button-container text-center">
                    <input type="submit" value="${state.value}" class="sign-from--button">
                </div>         
            </form>
        </div>
        `;
    }

    set_events() {
        const form = document.getElementById('sign-form');
        form.addEventListener('submit', (e) => this._submit(e))
    }

    _submit(e) {
        e.preventDefault();
        console.log(this._get_form_data());
    }

    _get_form_data() {
        const login_field = document.getElementById('login');
        const password_field = document.getElementById('password');
        const url_field = document.getElementById('sign_url');

        return {
            login: login_field.value,
            password: password_field.value,
            url: url_field.value,
        };
    }
}

export default SignForm;