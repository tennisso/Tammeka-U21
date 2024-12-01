function sorteeriTabel(veerg) {
    const tabel = document.getElementById("statistikaTabel");
    let i;
    let rida;
    let järgmineRida;
    let suund = "kahanev";
    let vahetusi = true;
    let järjestusVahetatud = false;

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
                    if (rida < järgmineRida) {
                         peaksVahetama = true;
                         järjestusVahetatud = true;
                    }
                } else if (Number(rida) > Number(järgmineRida)) { 
                    peaksVahetama = true;
                    järjestusVahetatud = true;
                };
            }
            else if (suund === "kahanev") {
                if (isNaN(rida) || isNaN(järgmineRida)) {
                    if (rida > järgmineRida) {
                        peaksVahetama = true;
                        järjestusVahetatud = true;
                    }
                } else if (Number(rida) < Number(järgmineRida)) {
                    peaksVahetama = true;
                    järjestusVahetatud = true;
                }
            }

            // Kui vahetus on vajalik
            if (peaksVahetama) {
                read[i].parentNode.insertBefore(read[i + 1], read[i]);
                vahetusi = true;
                break; // Välju välimisest tsüklist, kui vahetus on tehtud
            }
        }

        if (vahetusi === false && järjestusVahetatud === false) {
            suund = "kasvav";
            vahetusi = true;
        }
    }
}
