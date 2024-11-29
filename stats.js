function sorteeriTabel(veerg) {
    const tabel = document.getElementById("statistikaTabel");
    let vahetus, i, rida, järgmineRida, suund = "kasvav", vahetusi = true;

    while (vahetusi) {
        vahetusi = false;
        const read = tabel.rows;

        for (i = 1; i < read.length - 1; i++) {
            vahetus = false;
            rida = read[i].cells[veerg].innerHTML.toLowerCase();
            järgmineRida = read[i + 1].cells[veerg].innerHTML.toLowerCase();

            
            if (suund === "kasvav") {
                if (isNaN(rida) || isNaN(järgmineRida)) {
                    if (rida > järgmineRida) vahetus = true;
                } else if (Number(rida) > Number(järgmineRida)) vahetus = true;
            } else if (suund === "kahanev") {
                if (isNaN(rida) || isNaN(järgmineRida)) {
                    if (rida < järgmineRida) vahetus = true;
                } else if (Number(rida) < Number(järgmineRida)) vahetus = true;
            }

            if (vahetus) {
                read[i].parentNode.insertBefore(read[i + 1], read[i]);
                vahetusi = true;
                break;
            }
        }
        
        if (!vahetusi && suund === "kasvav") {
            suund = "kahanev";
            vahetusi = true;
        }
    }
}
