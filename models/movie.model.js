const db = require('../utils/db');
const TBL_FILM = 'film';

module.exports = {

    all : async function(){
        return await db.load(`select * from ${TBL_FILM}`);
    },
    add : async function(entity) {
        return await db.add(entity, TBL_FILM);
    },
    update : async function(newVal, idFilm, attribute) {
        const sql = `
        update ${TBL_FILM} set ${attribute} = '${newVal}' where idFilm = ${idFilm}
        `;
        return await db.load(sql);    
    },
    single: async function(idFilm){
        return await db.load(`select * from ${TBL_FILM} where idFilm = ${idFilm} `);

    },

    singleById: async function(idFilm){
        const rows =  await db.load(`select * from ${TBL_FILM} where idFilm = '${idFilm}' `);
        if(rows.length === 0){
            return null;
        }
        return rows[0];
    }

    
}