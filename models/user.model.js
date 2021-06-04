const db = require('../utils/db');
const TBL_USERS = 'users';

module.exports = {

    all : async function(){
        return await db.load(`select * from ${TBL_USERS}`);
    },
    add : async function(entity) {
        return await db.add(entity, TBL_USERS);
    },
    update : async function(newVal, idUser, attribute) {
        const sql = `
        update ${TBL_USERS} set ${attribute} = '${newVal}' where idUser = ${idUser}
        `;
        return await db.load(sql);    
    },
    single: async function(idUser){
        return await db.load(`select * from ${TBL_USERS} where id = ${idUser} `);

    },

    singleByUsername : async function(username){
        const rows =  await db.load(`select * from ${TBL_USERS} where username = ${username} `);
        if(rows.length === 0){
            return null;
        }
        return rows[0];
    }

    
}