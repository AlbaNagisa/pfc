const buttons = document.querySelectorAll("button");
let score_joueur = 0;
let score_bot = 0;

for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[0])
    buttons[i].addEventListener("click", function () {
        const f = "Feuille";
        const c = "Ciseaux";
        const p = "Pierre";
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML

        let resultat = "";
        
       
        if (joueur === robot) {
            resultat = "Egalité";

        } else if ((joueur === p && robot === c) || (joueur === c && robot === f) || (joueur === f && robot === p)) {
            resultat = "Gagné";
            score_joueur++;
        } else {
            resultat = "Perdu";
            score_bot++;
        }
        document.querySelector(".resultat").innerHTML = `
        <div class="color">
       Joueur: ${joueur} Score: ${score_joueur} </br>
       Robot: ${robot} Score: ${score_bot}</br>
       ${resultat}
       </div>`;
        function victoire(j, b) {
            j = score_joueur
            b = score_bot
            if (j < b) return `victoire du Robot à ${score_bot} contre ${score_joueur} pour Robot`
            else return `victoire du Joueur à ${score_joueur} contre ${score_bot} pour Joueur`
            
}
        if (score_joueur === 5) {
            document.querySelector(".resultat").innerHTML = `La partie est terminé ${victoire(score_joueur, score_bot)}`
            score_bot = 0;
            score_joueur = 0;
            var audio = new Audio('static/vic.mp3');
            audio.play();
        } else if (score_bot === 5) {
            document.querySelector(".resultat").innerHTML = `La partie est terminé ${victoire(score_joueur, score_bot)}`
            score_bot = 0;
            score_joueur = 0;
            var oaudi2 = new Audio('static/def.mp3')
            oaudi2.play()
        }

        

        //console.log(`Joueur: ${joueur} VS Robot: ${robot}`)
    })
}