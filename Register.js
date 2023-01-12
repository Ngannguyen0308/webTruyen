let serverUrl = 'https://dev.thanqminh.com:3001/';
const register = async () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
    let conPassword = document.getElementById('con_pwd').value;

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    if (conPassword != password) {
        alert("Your confirm password is not same as your password.");
    } else {
        const response = await fetch(`${serverUrl}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                fname,
                lname
            })
        });

        if (response.ok) {
            alert("Register successfully!!!");
            window.location.assign("Login.html")
        } else {
            alert("Fail register!Please check your information")
        }
    }
}
