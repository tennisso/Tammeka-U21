function sorteeriTabel(veerg) {
    const tabel = document.getElementById("statistikaTabel");
    let vahetus, i, rida, järgmineRida, suund = "kasvav", vahetusi = true;

    // Kordab, kuni ei ole enam vahetusi
    while (vahetusi) {
        vahetusi = false;
        const read = tabel.rows;

        // Läbib kõik read (va. 1. rida)
        for (i = 1; i < read.length - 1; i++) {
            vahetus = false;
            rida = read[i].cells[veerg].innerHTML.toLowerCase();
            järgmineRida = read[i + 1].cells[veerg].innerHTML.toLowerCase();

            // Kasvav järjestus
            if (suund === "kasvav") {
                if (isNaN(rida) || isNaN(järgmineRida)) {
                    if (rida > järgmineRida) vahetus = true;
                } else if (Number(rida) > Number(järgmineRida)) vahetus = true;
            }
            // Kahanev
            else if (suund === "kahanev") {
                if (isNaN(rida) || isNaN(järgmineRida)) {
                    if (rida < järgmineRida) vahetus = true;
                } else if (Number(rida) < Number(järgmineRida)) vahetus = true;
            }

            // Kui vahetus on vajalik
            if (vahetus) {
                read[i].parentNode.insertBefore(read[i + 1], read[i]);
                vahetusi = true;
                break; // Välju välimisest tsüklist, kui vahetus on tehtud
            }
        }

        // Kui vahetusi ei toimunud ja suund on kasvav, vaheta suund kahanevaks
        if (!vahetusi && suund === "kasvav") {
            suund = "kahanev";
            vahetusi = true; // Alustame uut järjestamist kahanevas suunas
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const sotsiaalmeedia = {
        facebook: 'https://facebook.com/yourpage',
        twitter: 'https://twitter.com/yourprofile',
        instagram: 'https://instagram.com/yourprofile',
        linkedin: 'https://linkedin.com/in/yourprofile'
    };
 const iconsContainer = document.querySelector('.social-media-icons');
    

    Object.keys(sotsiaalmeedia).forEach(platvorm => {
        const link = document.createElement('a');
        link.href = sotsiaalmeedia[platvorm];
        link.classList.add('social-icon', platvorm);
        const icon = document.createElement('i');
        icon.classList.add('fa', `fa-${platvorm}`);
        link.appendChild(icon);

        iconsContainer.appendChild(link);
    });
});
