document.querySelector("#user_login_form").addEventListener("submit",loginUser);

let currentSession =JSON.parse(localStorage.getItem("userSession"))||[];

if(currentSession.length >0){
    alert("Logout  current session !")
    window.location.href="index.html";
}

async function loginUser(event){
    event.preventDefault();
    
    var email = document.getElementById('userEmail').value;
    var phone = document.getElementById("userMobile").value;
    var password = document.getElementById('userPassword').value;
    


    var raw = "";

    var requestOptions = {
      method: 'PUT',
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`https://theChef vegetables and Meatsdeployment-production.up.railway.app/customer/${email}/${phone}/${password}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        alert("Password has been changed");
        window.location.href="./userLogin.html"
    })
      .catch(error => console.log('error', error));
      

}