const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://resultadosffcv.isquad.es/clasificacion.php?id_temp=2223&id_torneo=49062")
    .then(({ data }) => {
        const $ = cheerio.load(data);
        const rows = [];
        const sel = "html > body > div.row > div.col-xl-8.col-lg-12.col-md-12 > div.table-responsive > table.table.clasificacion";
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

