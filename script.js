alert("Kəmərləri bağlıyın, getdik!");

let q1 = prompt("2x2");
if (q1 == 4) {
    alert("Doğrudur");

    let q2 = prompt("3x3")
    if (q2 == 9) {
        alert("Doğrudur");

        let q3 = prompt("4x4");
        if (q3 == 16) {
            alert("Doğrudur");
            alert("İndi isə biraz çətin");

            let q4 = prompt("𝝅-in uzunlugu");
            if (q4 == 3.14) {
                alert("Doğrudur");
                alert("Əla, onda biraz da çətin");

                // prompt()
                let q5 = prompt("Verilmiş cümlədəki hansı 'da(də)' bitişik və ya aralı yazılmalıdır.","Kursa gələndə hansı yolda çətinliklər yarana bilər yada düşməz yada ev tapşırığını yerinə yetirmək.");
                if (q5 == "Kursa gələndə hansı yolda çətinliklər yarana bilər ya da düşməz yada ev tapşırığını yerinə yetirmək.") {
                    alert("Bravo, təbriklər!");
                    

                } else {
                    alert("Yanlışdır");
                }

            } else {
                alert("Yanlışdır");
            }

        } else {
            alert("Yanlışdır");
        }

    } else {
        alert("Yanlışdır");
    }

} else {
    alert("Yanlışdır")
}
