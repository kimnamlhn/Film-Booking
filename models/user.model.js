const db = require('../utils/db');
const TBL_USERS = 'users';

module.exports = {

    all : function(){
        return db.load(`select * from ${TBL_USERS}`);
    },
    add : function(entity) {
        return await db.add(entity, TBL_USERS);
        },
    
}