// Code JavaScript pour créer un calendrier statique
const calendarElement = document.getElementById('calendar');

// Mois et années statiques pour l'exemple
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const year = new Date().getFullYear();

// Générer le HTML du calendrier
let calendarHTML = `<div class="year">${year}</div>`;
calendarHTML += '<div class="months">';
months.forEach(month => {
    calendarHTML += `<div class="month">${month}</div>`;
});
calendarHTML += '</div>';

// Insérer le HTML dans l'élément du calendrier
calendarElement.innerHTML = calendarHTML;
