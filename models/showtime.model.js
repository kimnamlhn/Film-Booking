const db = require('../utils/db');
const TLB_Showtime = 'showtime';

module.exports = {

    all : async function(){
        return await db.load(`select * from ${TLB_Showtime}`);
    },
    add : async function(entity) {
        return await db.add(entity, TLB_Showtime);
    },
    update : async function(newVal, idFilm, idCinema, attribute) {
        const sql = `
        update ${TLB_Showtime} set ${attribute} = '${newVal}' where idFilm = ${idFilm} and idCinema = ${idCinema}
        `;
        return await db.load(sql);    
    },
    single: async function(idFilm){
        return await db.load(`select * from ${TLB_Showtime} where idFilm = ${idFilm} and idCinema = ${idCinema}`);

    },

    
}