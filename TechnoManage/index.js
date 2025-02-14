function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '1234') {
        const src = 'https://cdn-icons-png.flaticon.com/512/5850/5850276.png';
        localStorage.setItem('username', username);
        localStorage.setItem('src', src);
        window.location.href = './useinterface.html';
        return false; // لمنع إعادة تحميل الصفحة
    } else {
        alert('Invalid username or password!');
        return false; // لمنع إعادة تحميل الصفحة
    }
}

const username = localStorage.getItem('username');
const src = localStorage.getItem('src');
document.getElementById('staffname').textContent= username;
document.getElementById('staffpicture').src = src;
//date
const date = new Date().toISOString().split('T')[0];
document.getElementById('date').innerText = date;
//resetActive 

function resetActive(){
    document.querySelectorAll('ul a').forEach(link =>{
        link.classList.remove('bg-white', 'text-blue-600', 'scale-105');
    });
}
function rh() {
    document.getElementById('display').innerHTML = `
        <div class="grid grid-cols-3 gap-4 p-4">
            <div class="bg-blue-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                <h2 class="text-lg font-bold cursor-pointer text-center" onclick="employees()">Number of employees</h2>
                <input type="number" id="employeenum" value="8" class="text-2xl text-center bg-transparent border-0 ml-4 text-white focus:outline-none" readonly>
                <button class="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 flex justify-center items-center" onclick="employeeregistre()">
                <i class="fas fa-plus"></i>
                </button>

            </div>
            <div class="bg-green-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                <h2 class="text-lg font-bold cursor-pointer text-center" onclick="students()">Number of Students</h2>
                <input type="number" id="studentsnum" value="8" class="text-2xl text-center bg-transparent border-0 ml-4 text-white focus:outline-none" readonly>
                <button class="p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200 flex justify-center items-center" onclick="studentsregistre()">
                <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="bg-yellow-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                <a class="text-lg font-bold cursor-pointer text-center" href="./email.html">Messages</a>
                <p class="text-2xl text-center">8</p>
            </div>
        </div>
    `;
}

function employees() {
    document.getElementById('display1').innerHTML = `
        <div class="bg-gray-200 p-4 rounded-lg w-full">
            <h2 class="text-lg font-bold">Employees List</h2>
            <ul class="flex flex-wrap w-full" id="employee">
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">HOUSSAM LEBRINI</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">ANASS LEBRINI</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">YASSINE TALIB</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">MOHAMMED NADIR</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">BIDANI MOUSTAFA</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">SAAD TALIB</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">AYOUB NAIMI</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th/id/R.2d79ed9cff3081d52e90343e933f3023?rik=%2bomluFGefRSIJQ&pid=ImgRaw&r=0" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">SARA QABIL</h1>
</li>
            </ul>
        </div>
    `;
}
//students

function students() {
    document.getElementById('display1').innerHTML = `
        <div class="bg-gray-200 p-4 rounded-lg w-full">
            <h2 class="text-lg font-bold">Students List</h2>
            <ul class="flex flex-wrap w-full" id="students">
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">HOUSSAM LEBRINI</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">ANASS LEBRINI</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">YASSINE TALIB</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">MOHAMMED NADIR</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">BIDANI MOUSTAFA</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">SAAD TALIB</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">AYOUB NAIMI</h1>
</li>
<li class="py-2 flex flex-col justify-center items-center ml-10">
    <img src="https://th.bing.com/th?id=OIF.BKV%2f4c43aZJddo0F7ljZmQ&rs=1&pid=ImgDetMain" 
         width="50px" height="50px" class="rounded-full mb-2">
    <h1 class="text-center">SARA QABIL</h1>
</li>
            </ul>
        </div>
    `;
}

function studentsregistre(){
    document.getElementById('display2').innerHTML = `
<div class="fixed flex flex-col justify-start left-[800px] top-[50px] bg-gray-200 rounded-lg shadow-2xl w-80 h-95 p-4 overflow-y-auto">
    <button class="absolute top-1 right-4 text-blue-600 text-2xl font-bold hover:text-blue-700" onclick="closeForm()">&times;</button>
    <h1 class="text-center text-blue-600 font-bold text-2xl mb-2">Register a new Student</h1>
    <div class="flex flex-col justify-center items-center gap-y-2">
        <input type="text" placeholder="FULL NAME" id="fname" required class="border-2 border-blue-600 rounded-lg p-2 w-full" oninput="usernamefun()">
        <input type="email" id="email" placeholder="E-MAIL" readonly class="border-2 border-blue-600 rounded-lg p-2 w-full text-gray-600">
        <input type="text" id="studentsusername" placeholder="USERNAME" readonly class="border-2 border-blue-600 rounded-lg p-2 w-full text-gray-600">
        <input type="tel" placeholder="PHONE NUMBER" required class="border-2 border-blue-600 rounded-lg p-2 w-full">
        <input type="file" id="imageUpload" accept="image/*" placeholder="UPLOAD IMAGE" required class="border-2 border-blue-600 rounded-lg p-2 w-full">
        <button class="bg-blue-600 text-white text-2xl font-bold hover:bg-blue-700 w-full h-10 rounded-lg" onclick="Register()">REGISTER</button>
    </div>
</div>`;

}

function employeeregistre(){
    document.getElementById('display2').innerHTML = `
<div class="fixed flex flex-col justify-start left-[800px] top-[50px] bg-gray-200 rounded-lg shadow-2xl w-80 h-125 p-4 overflow-y-auto">
    <button class="absolute top-1 right-4 text-blue-600 text-2xl font-bold hover:text-blue-700" onclick="closeForm()">&times;</button>
    <h1 class="text-center text-blue-600 font-bold text-2xl mt-7">Register a new Employee</h1>
    <div class="flex flex-col justify-center items-center gap-y-2 mt-10">
        <input type="text" placeholder="FULL NAME" id="fname" required class="border-2 border-blue-600 rounded-lg p-2 w-full" oninput="usernamefun()">
        <input type="email" id="email" placeholder="E-MAIL" readonly class="border-2 border-blue-600 rounded-lg p-2 w-full text-gray-600">
        <input type="text" id="studentsusername" placeholder="USERNAME" readonly class="border-2 border-blue-600 rounded-lg p-2 w-full text-gray-600">
        <input type="tel" placeholder="PHONE NUMBER" required class="border-2 border-blue-600 rounded-lg p-2 w-full">
        <input type="text" placeholder="RIB" required class="border-2 border-blue-600 rounded-lg p-2 w-full">
        <select id="bank" required class="border-2 border-blue-600 rounded-lg p-2 w-full hover:border-2 border-blue-600 rounded-lg p-2 w-full">
        <option>Select Bank</option>
        <option>Attijariwafa Bank</option>
        <option>Banque Populaire</option>
        <option>BMCE Bank of Africa</option>
        <option>Crédit Agricole du Maroc</option>
        <option>Crédit du Maroc</option>
        <option>Société Générale Maroc</option>
        <option>BMCI (Banque Marocaine pour le Commerce et l'Industrie)</option>
        <option>CIH Bank</option>
        <option>Al Barid Bank</option>
        </select>
        <select id="post" required class="border-2 border-blue-600 rounded-lg p-2 w-full">
        <option>Select Jobs</option>
        <option>Operations Director (RESERVED)</option>
        <option>Technical Director</option>
        <option>School Administrator</option>
        <option>HR Manager</option>
        <option>Finance Officer</option>
        <option>Legal Advisor</option>
        <option>Admissions Coordinator</option>
        <option>System Administrator</option>
        <option>IT Support Specialist</option>
        <option>Security Engineer</option>
        <option>Community Manager</option>
        <option>Marketing Specialist</option>
        <option>Event Coordinator</option>
        <option>Platform Developer</option>
        <option>Innovation Manager </option>
        <option>Partnership Coordinator</option>
        </select>
        <input type="file" id="imageUpload" accept="image/*" placeholder="UPLOAD IMAGE" required class="border-2 border-blue-600 rounded-lg p-2 w-full">
        <button class="bg-blue-600 text-white text-2xl font-bold hover:bg-blue-700 w-full h-10 rounded-lg" onclick="RegisterEmp()">REGISTER</button>
    </div>
</div>`;

}
/*document.getElementById('display2').addEventListener('onmouseenter', function(event){
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.style.left = mouseX + 'px';
    this.style.top = mouseY + 'px';}); */
function usernamefun() {
    let Fname = document.getElementById('fname').value.trim(); 
    
    // تقسيم الاسم إلى أجزاء بناءً على المسافات
    let nameParts = Fname.split(/\s+/); 
    // التأكد من وجود اسم ولقب
        let firstTwoLetters = nameParts[0].substring(0, 2); // أول حرفين من الاسم

        let lastName = nameParts.length > 1 ? nameParts.slice(1).join('') : ''; // حذف المسافة وجمع باقي اللقب
        let username = (firstTwoLetters + lastName).toLowerCase();
        document.getElementById('studentsusername').value = username;
        document.getElementById('email').value = username + '@technostudents.ma';
}

function closeForm(){
    document.getElementById('display2').innerHTML = "";
}

function Register() {
    const Fname = document.getElementById('fname').value;
    const image = document.getElementById('imageUpload').files[0];

    if (!Fname || !image) {
        alert("Please enter name and choose an image!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const studentsItem = document.createElement('li');
        studentsItem.className = 'student-item py-2 flex flex-col justify-center items-center ml-10';

        const studentImage = document.createElement('img');
        studentImage.src = e.target.result;
        studentImage.width = 50;
        studentImage.height = 50;
        studentImage.classList.add("rounded-full");
        studentImage.className = 'rounded-full mb-2';

        const studentName = document.createElement('h1');
        studentName.textContent = Fname;
        studentName.className = 'text-center font-100';


        studentsItem.appendChild(studentImage);
        studentsItem.appendChild(studentName);
        document.getElementById('employee').appendChild(studentsItem);
    };

    reader.readAsDataURL(image);

    // تحديث عدد الطلاب
    const NumStud = document.getElementById('studentsnum');
    let Num = parseInt(NumStud.value, 10) || 0;
    Num += 1;
    NumStud.value = Num;
    const NumEmp = document.getElementById('employeenum');
    let Nmu1= parseInt(NumEmp.value,10) || 0;
    Nmu1 += 1;
    NumEmp.value = Nmu1;

}

function RegisterEmp() {
    const Fname = document.getElementById('fname').value;
    const image = document.getElementById('imageUpload').files[0];

    if (!Fname || !image) {
        alert("Please enter name and choose an image!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const EmpItem = document.createElement('li');
        EmpItem.className = 'student-item py-2 flex flex-col justify-center items-center ml-10';

        const EmpImage = document.createElement('img');
        EmpImage.src = e.target.result;
        EmpImage.width = 50;
        EmpImage.height = 50;
        EmpImage.classList.add("rounded-full");
        EmpImage.className = 'rounded-full mb-2';

        const studentName = document.createElement('h1');
        studentName.textContent = Fname;
        studentName.className = 'text-center font-100';


        EmpItem.appendChild(EmpImage);
        EmpItem.appendChild(studentName);
        document.getElementById('employee').appendChild(EmpItem);
    };

    reader.readAsDataURL(image);

    // تحديث عدد العاملين
    const NumEmp = document.getElementById('employeenum');
    let Nmu1= parseInt(NumEmp.value,10) || 0;
    Nmu1 += 1;
    NumEmp.value = Nmu1;

}
