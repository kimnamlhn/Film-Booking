const db = require('../utils/db');
const TBL_FIML = 'film';

module.exports = {
    all : async function(){
        return await db.load(`select * from ${TBL_FIML}`);
    },
    add : async function(entity) {
        return await db.add(entity, TBL_FIML);
    },
    update : async function(newVal, idFilm, attribute) {
        const sql = `
        update ${TBL_FIML} set ${attribute} = '${newVal}' where idFilm = ${idFilm}
        `;
        return await db.load(sql);    
    },
    single: async function(idFilm){
        return await db.load(`select * from ${TBL_FIML} where id = ${idFilm} `);

    },

    triple: async function(){
        return await db.load(`select * from ${TBL_FIML} limit = 3`);
    }

}