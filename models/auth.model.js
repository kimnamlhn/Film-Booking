const db = require('../utils/db');

module.exports = {
    async checkAdmin(idUser){
        const rows = await db.load(`select * from users t 
                                    where ${idUser} = t.id and t.role = 0`);
        
        if(rows.length == 0)
            return NULL;
        return rows[0];
        
    }
}