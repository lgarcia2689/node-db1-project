const Accounts = require('./accounts-model')

async function checkAccountPayload(req, res, next){
  // DO YOUR MAGIC
  console.log(`
  ${req.method} request to ${req.baseUrl} endpoint!
  req.body ${JSON.stringify(req.body)}
  req.params.id ${req.params.id}
`)
next()
  

}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  next()

}

async function checkAccountId(req, res, next){
  // DO YOUR MAGIC
  try {
    const users = await Accounts.getById(req.params.id)
    if (!users) {
      next({ status: 404,  message: "account not found" })
    } else {
      req.users = users
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkAccountPayload,
  checkAccountId,
};