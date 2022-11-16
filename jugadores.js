const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://resultadosffcv.isquad.es/equipo_plantilla.php?id_equipo=206356164&torneo_equipo=40578")
    .then(({ data }) => {
        const $ = cheerio.load(data);
        const rows = [];
        const sel = "div.row > div > a > header";
        $(sel).each(function (i, e) {
            const row = [];
            rows.push(row);
            $(this).find("h4").each(function (i, e) {
                row.push($(this).text().trim());
            });
            $(this).find("dt").each(function (i, e) {
                row.push($(this).text().trim());
            });

        });
        console.table(rows);
    });