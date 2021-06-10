const db = require('../utils/db');
const TBL_TICKET = 'film';

module.exports = {

    all : async function(){
        return await db.load(`select * from ${TBL_TICKET}`);
    },
    add : async function(entity) {
        return await db.add(entity, TBL_TICKET);
    },
    update : async function(newVal, idTicket, attribute) {
        const sql = `
        update ${TBL_TICKET} set ${attribute} = '${newVal}' where idTicket = ${idTicket}
        `;
        return await db.load(sql);    
    },
    single: async function(idTicket){
        return await db.load(`select * from ${TBL_TICKET} where idTicket = ${idTicket} `);

    },

    singleById: async function(idTicket){
        const rows =  await db.load(`select * from ${TBL_TICKET} where idTicket = '${idTicket}' `);
        if(rows.length === 0){
            return null;
        }
        return rows[0];
    }

    
}