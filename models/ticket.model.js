const db = require('../utils/db');
const TBL_TICKET = 'ticket';

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

    bookTicket: async function(widthPos, heightPos){
        return await db.add(`insert into ticket values(NULL, NULL, 'A1', '${widthPos}', '${heightPos}',50000);`);
    },
    
    singleByPos: async function(widthPos, heightPos){
        const rows =  await db.load(`select * from ${TBL_TICKET} where widthPos = '${widthPos}' and heightPos = '${heightPos} `);
        if(rows.length === 0){
            return null;
        }
        return rows[0];
    }

    
}