const Database = require("./db");
const saveOrphanage = require(`./saveOrphanage`);

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "53.8826286",
    lng: "-1.4032052",
    name: "Orphanage Adel",
    about:
      "3222222Presta assistencia a criancas de 06 a 15 anos que se encontre em situacao de risco e/ou vulnerabilidade social.",
    whatsapp: "234252",
    images: [
      "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
    opening_hours: "Horario de visitas das 8h ate 18h",
    open_on_weekends: "1",
  });

  const selectedOrphanages = await db.all("SELECT * FROM orphanages");

  console.log(selectedOrphanages);
});
