const conectionDatabase = require('../db');

module.exports.getUsers = async (req, res) => {
    const [row] = await conectionDatabase.query('select * from loginUsers');
    if(row.length === 0){
        res.json('no existe la tabla');
        return;
    }
    res.send(row);
};

module.exports.getUser = async (req, res) => {
    const id = req.params.id;
    const [row] = await conectionDatabase.query('select * from loginUsers where id = ?', [id]);
    if(row.length === 0){
        res.send('error');
        return;
    }
    res.send(row[0]);
};

module.exports.postUsers = async (req, res) => {
    const {name, nameUser, email, password} = req.body;
    if(name, nameUser, email, password){
        const [existeEmail] = await conectionDatabase.query('select * from loginUsers where email = ?', [email]);
        if(existeEmail.length > 0){
            res.send("el gmail ya existe, usa otro");
        } else {
            const [row] = await conectionDatabase.query('insert into loginUsers (name, nameUser, email, password) value (?,?,?,?)', [name, nameUser, email, password]);
            res.send(row);
        }
        res.send(row);
    } else {
        res.send('no estan todos los datos completos');
    }
};
module.exports.deleteUsers = async (req, res) => {
    const [result] = await conectionDatabase.query('delete from loginUsers where id = ?', [req.params.id]);
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'usuario no encontrado'
    });
    res.sendStatus(204);
}
module.exports.putUsers = async (req, res) => {
    const {id} = req.params;
    const {name, nameUser} = req.body;
    if(name, nameUser){
        const [result] = await conectionDatabase.query('update loginUsers set name = ifnull(?, name), nameUser = ifnull(?, nameUser) where id = ?', [name, nameUser, id]);
        if(result.affectedRows <= 0){
            res.status(404).json({
                message: 'no existe el usuario a actualizar'
            })
            return;
        }
        const [dataid] = await conectionDatabase.query('select * from loginUsers where id = ?', [id]);

        res.json(dataid[0]);
    } 
}