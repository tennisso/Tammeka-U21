function sorteeriTabel(veerg) {
    const tabel = document.getElementById("statistikaTabel");
    let i;
    let rida;
    let järgmineRida;
    let suund = "kahanev";
    let vahetusi = true;

    while (vahetusi) {
        vahetusi = false;
        const read = tabel.rows;

        // Läbib kõik read (va. 1. rida)
        for (i = 1; i < read.length - 1; i++) {
            let peaksVahetama = false;
            rida = read[i].cells[veerg].innerHTML.toLowerCase();
            järgmineRida = read[i + 1].cells[veerg].innerHTML.toLowerCase();

            if (suund === "kasvav") {
                if (isNaN(rida) || isNaN(järgmineRida)) {
                    if (rida > järgmineRida) {
                         peaksVahetama = true;
                    }
                } else if (Number(rida) > Number(järgmineRida)) { 
                    peaksVahetama = true
                };
            }
            else if (suund === "kahanev") {
                if (isNaN(rida) || isNaN(järgmineRida)) {
                    if (rida < järgmineRida) { 
                        peaksVahetama = true;
                    }
                } else if (Number(rida) < Number(järgmineRida)) {
                    peaksVahetama = true;
                }
            }

            // Kui vahetus on vajalik
            if (peaksVahetama) {
                read[i].parentNode.insertBefore(read[i + 1], read[i]);
                vahetusi = true;
                break; // Välju välimisest tsüklist, kui vahetus on tehtud
            }
        }
    }
}
