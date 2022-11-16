const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://resultadosffcv.isquad.es/club_equipos.php?&id_temp=2223&id_club=206356")
    .then(({ data }) => {
        const $ = cheerio.load(data);

        const sel = "body > div:nth-child(7) > div.col-xl-6.col-lg-8.col-md-12 > div > div:nth-child(2) > table > tbody > tr";

        const result = $(".tabla_jugadores tr").map((i, element) => ({
            club: $(element).find('td:nth-of-type(1)').text().trim(),
            categoria: $(element).find('td:nth-of-type(2)').text().trim(),
            competicion: $(element).find('td:nth-of-type(3)').text().trim(),
            link: $(element).find('a').attr('href')
        })).get()
        console.log(JSON.stringify(result))
    });