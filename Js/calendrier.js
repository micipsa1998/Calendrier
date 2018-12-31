//class calendrier
class Calendrier{
	constructor(domTarget) {

        try {
            this.domElement = document.querySelector(domTarget);

            // Renvoit une erreur si l'élément n'éxiste pas
            if (!this.domElement) throw "Calendar - L'élément spécifié est introuvable";
        } catch (e) {
            document.getElementById('stateCalendar').innerHTML = "Error: " + e.message + ".";

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
	this.domElement.appendChild(entete);
	// On créé le div qui contiendra les jours de notre calendrier
        this.content = document.createElement('div');
        this.domElement.appendChild(this.content);

        // On créé le div qui contiendra les jours feriés de notre calendrier
        let contentSpec = document.createElement('div');
        contentSpec.classList.add("contentSpec");
        contentSpec.setAttribute("id", "contentSpec");
        contentSpec.textContent = ""
        this.domElement.appendChild(contentSpec);
	//on cree une div qui contiendra tous les rendez vous
	let contentMeet = document.createElement('div');
        contentMeet.classList.add("contentMeet");
        contentMeet.setAttribute("id", "contentMeet");
        contentMeet.textContent = ""
        this.domElement.appendChild(contentMeet);

        // Bouton "précédent"
        let previousButton = document.createElement('button');
        previousButton.setAttribute('data-action', '-1');
        previousButton.textContent = '<';
        entete.appendChild(previousButton);

        // Div qui contiendra le mois/année affiché
        this.monthDiv = document.createElement('div');
        this.monthDiv.classList.add('month');
        entete.appendChild(this.monthDiv);

        // Bouton "suivant"
        let nextButton = document.createElement('button');
        nextButton.setAttribute('data-action', '1');
        nextButton.textContent = '>';
        entete.appendChild(nextButton);

        // Action des boutons "précédent" et "suivant"
        this.domElement.querySelectorAll('button').forEach(element => {
            element.addEventListener('click', () => {
                // On multiplie par 1 les valeurs pour forcer leur convertion en "int"
                this.currentMonth.setMonth(this.currentMonth.getMonth() * 1 + element.getAttribute('data-action') * 1);
                this.loadMonth(this.currentMonth);
            });
        });

        // On charge le mois actuel 
        this.loadMonth(this.currentMonth);
        var daySelectedAuto = this.today.getDate() + "/" + (this.today.getMonth() + 1) + "/" + this.today.getFullYear();
        this.meeting(daySelectedAuto);

    }


    loadMonth(date) {
        //marqueur journée feriée
        function JoursFeries(dateferies) {
            var joursFerie = "aucun";
            //liste des jours feries avec le mois dans l'année
            var arrayJoursferies = new Array("1/1", "1/5", "8/5", "14/7", "15/8", "1/11", "11/11", "25/12");
            for (var i = 0; i < arrayJoursferies.length; i++) {
                if (dateferies == arrayJoursferies[i] && i == 0) {
                    joursFerie = "Jour de l'AN";
                } else if (dateferies == arrayJoursferies[i] && i == 1) {
                    joursFerie = "Fête de travail";
                } else if (dateferies == arrayJoursferies[i] && i == 2) {
                    joursFerie = "Fête de la victoire";
                } else if (dateferies == arrayJoursferies[i] && i == 3) {
                    joursFerie = "Fête nationale";
                } else if (dateferies == arrayJoursferies[i] && i == 4) {
                    joursFerie = "Assompton";
                } else if (dateferies == arrayJoursferies[i] && i == 5) {
                    joursFerie = "Toussaint";
                } else if (dateferies == arrayJoursferies[i] && i == 6) {
                    joursFerie = "Armistice";
                } else if (dateferies == arrayJoursferies[i] && i == 7) {
                    joursFerie = "NOÊL";
                }
            }
            return joursFerie;

}


class rendezVous{
	constructor(daySelected, titre, descriptions) {

        //titre du rendez-vous
        this.titre = titre;

        //Description du rendez-vous
        this.description = descriptions;

        this.meeting = document.getElementById("meetings");

        if (!this.meeting) throw "rendzVous- Cet élément est indisponible";

        //on crée le div qui contiendra la class rendez vous
        let divRendezVous = document.createElement('div');
        divRendezVous.classList.add("divRendezVous");
        divRendezVous.setAttribute("id", "divRendezVous");
        this.meeting.appendChild(divRendezVous);

        // On créé le div qui contiendra l'entête de notre rendez vous
        let enteteRendezVous = document.createElement('div');
        enteteRendezVous.classList.add('enteteRendezVous');
        enteteRendezVous.setAttribute("id", "enteteRendezVous");
        enteteRendezVous.textContent = "Rendez Vous";
        divRendezVous.appendChild(enteteRendezVous);

        //creation de la div qui contiendera le rendez vous
        this.contentMetting = document.createElement('div');
        this.contentMetting.classList.add('contentMeeting');
        divRendezVous.appendChild(this.contentMetting);

        //creation de la div qui contiendera le label nom
        let contentLabelNom = document.createElement('div');
        contentLabelNom.classList.add('contentLabelNom');
        this.contentMetting.appendChild(contentLabelNom);


        //creation de la div qui contiendera le button de soumission
        let contentButton = document.createElement('div');
        contentButton.classList.add('contentButton');
        divRendezVous.appendChild(contentButton);



}
