const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db.select('*').from('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where({id}).first()
}

 async function create(account) {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert(account)
  return db('accounts').where({id}).first()
}

async function updateById(id, account){
  // DO YOUR MAGIC
  await db('accounts').where('id',id).update(account)
  const updatedAccount = await getById(id)
  return updatedAccount
}

async function deleteById(id){
  // DO YOUR MAGIC
  const accountBeingRemoved = await getById(id)
  await db('accounts').where('id',id).del()
  return accountBeingRemoved;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
