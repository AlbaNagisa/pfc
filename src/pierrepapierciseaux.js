const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
      const f = "Feuille";
      const c = "Ciseaux";
      const p = "Pierre";
      const joueur = buttons[i].innerHTML;
      const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML

      let resultat = "";
      if (joueur === robot) {
          resultat = "Egalité";
          
      } else if ((joueur === p && robot === c) || (joueur === c && robot === f ) || (joueur === f && robot === p)) {
          resultat = "Gagné";
      } else {
          resultat = "Perdus"; 
      }
       document.querySelector(".resultat").innerHTML = `
       Joueur: ${joueur} </br>
       Robot: ${robot} </br>
       ${resultat}
       `;



     // console.log(`Joueur: ${joueur} VS Robot: ${robot}`)
  })
}