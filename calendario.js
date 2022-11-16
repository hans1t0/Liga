const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://resultadosffcv.isquad.es/equipo_calendario.php?id_equipo=206356164&torneo_equipo=40578")
    .then(({ data }) => {
        const $ = cheerio.load(data);
        const rows = [];
        const sel = "body > div:nth-child(9) > div.col-xl-6.col-lg-8.col-md-12 > div.table-responsive > table > tbody > tr";
        $(sel).each(function (i, e) {
            const row = [];
            rows.push(row);
            $(this).find("tr").each(function (i, e) {
                row.push($(this).text().trim());
            });
            $(this).find("td").each(function (i, e) {
                row.push($(this).text().trim());
            });


        });
        console.table(rows);
    });