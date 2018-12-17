//class calendrier
class Calendrier{
//contructeur du calendrier
    contructor(calendar){
    this.calendrier = calendar;
//On test si le paremtre passé en argument existe
try{
if(!this.calendar)
throw
"l'element calendrier n''exsiste pas";
}
//Tableau contenant les mois du calendrier
 this.month= new array("Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre");
//Tableau contenant les jours de la semaine
 this.day= new array("Lun","Mar","Mer","Jeu","Ven","Sam","dimanche"); 
//on affeecte a la proprieté "today" la date d'aujourd'hui
 this.today=new Date();
//on affecte a "month" le mois et l'année actuelle
 this.month = new Date(this.today.getFullYear(), this.today.getMonth());

let entete = document.createElement("div");
entete.classList.add('entete');

}


class rendezVous{


}
const calendar = new calendar(#calendar);
