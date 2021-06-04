const db = require('../utils/db');

const TBL_USERS = 'users';

module.exports = {
    all : async function(){
        return await db.load(`select * from ${TBL_USERS} where role = 0`);
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
}