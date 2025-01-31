function reserve(){
    const Fname = document.getElementById('fname').value;
    const numb = document.getElementById('num').value;
    const dest= document.getElementById('dest').value;
    const date= document.getElementById('date').value;
    const time= document.getElementById('time').value;

    if(Fname == '' || numb == '' || dest == '' || date == '' || time == ''){
        alert('Please fill in the required fields');
        return;
    }
    alert('Reservation has been made successfully');
    document.getElementById('msg').innerText = 'Reservation has been made successfully, Please wait for the confirmation call.';
}

function price()
{
    const dest= document.getElementById('dest').value;
    if(dest === "TANGIER")
        {
            document.getElementById('price').innerText = '300 DH';
        }
        else if(dest === "CASABLANCA")
        {
            document.getElementById('price').innerText = '250 DH';
        }
        else if(dest === "KHOURIBGA")
        {
            document.getElementById('price').innerText = '200 DH';
        }
        else if(dest === "RABAT")
        {
            document.getElementById('price').innerText = '270 DH';
        }
        else if(dest === "AGADIR")
        {
            document.getElementById('price').innerText = '300 DH';
        }else if(dest === "BENI MELLAL")
        {
            document.getElementById('price').innerText = '200 DH';
        }else if(dest === "NADOR")
        {
            document.getElementById('price').innerText = '250 DH';
        }
}