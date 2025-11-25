const sideList = document.querySelector('.sid-list');
const bigContain = document.querySelector('.bigcontain');

document.getElementById('addwork').addEventListener('click', ()=>{

    const Form = document.createElement('div');
    Form.classList.add('formulaire');
    Form.innerHTML = `
        <div class="formsInput">
            <div class="cancelbtn">
                <button type="button"><i class="fas fa-multiply"></i></button>
            </div>
            <h1>fill out the form</h1>
            <form class="form"> 
                <div class="input">
                    <label for="fname">NOM COMPLET</label>
                    <input type="text" id="fname" placeholder="FULL NAME"/>
                </div>
                <div class="input1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmn9rtMpsmWu0sF0sfIWh2enQ1rOmtvGpog&s" class="imageurl" alt="logworker"/>
                    <input type="url" id="image" placeholder="URL"/>
                </div>
                <div class="input">
                    <label for="email">EMAIL</label>
                    <input type="email" id="email" placeholder="EMAIL"/>
                </div>
                <div class="input">
                    <label for="phone">NUMERO DE TELEPHONE</label>
                    <input type="text" id="phone" placeholder="NUMERO DE TELEPHONE"/>
                </div>
                <div class="input">
                    <label for="role">ROLE</label>
                    <select id="role" class="role">
                        <option disabled>ROLE</option>
                        <option value="SALARIE">SALARIE</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="NETOYAGE">NETOYAGE</option>
                        <option value="RECEPTIONNIST">RECEPTIONNIST</option>
                        <option value="SECURITE">SECURITE</option>
                        <option value="IT">IT</option>
                    </select>
                </div>
                <div class="input3">
                    <div class="input2">
                        <h1>EXPERIENCE</h1>
                        <div class="input">
                            <label for="entreprise">ENTREPRISE</label>
                            <input type="text" id="entreprise" placeholder="ENTREPRISE"/>
                        </div>
                        <div class="input">
                            <label for="roleexp">ROLE</label>
                            <input type="text" id="roleexp" placeholder="ROLE"/>
                        </div>
                        <div class="input">
                            <label for="datdeexp">DATE DE DEBUT</label>
                            <input type="date" id="datdeexp"/>
                        </div>
                        <div class="input">
                            <label for="datfiexp">DATE DU FIN</label>
                            <input type="date" id="datfiexp"/>
                        </div>
                    </div>
                </div>
                <button type="button">AJOUTER EXPERIENCE</button>
            </form>
            <button type="submit">AJOUTER</button>
        </div>
    `;
    bigContain.appendChild(Form);
})