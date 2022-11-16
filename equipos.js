const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://resultadosffcv.isquad.es/club_equipos.php?&id_temp=2223&id_club=206356")
    .then(({ data }) => {
        const $ = cheerio.load(data);
        const rows = [];
        const sel = "body > div:nth-child(7) > div.col-xl-6.col-lg-8.col-md-12 > div > div:nth-child(2) > table > tbody > tr";
        $(sel).each(function (i, e) {
            const row = [];
            rows.push(row);
            $(this).find("tr").each(function (i, e) {
                row.push($(this).text().trim());
            });
            $(this).find("td").each(function (i, e) {
                row.push($(this).text().trim());
            });
            $(this).find('a').each(function (i, e) {
                row.push($(this).attr('href'));
            });

        });
        console.table(rows);
    })
    ;