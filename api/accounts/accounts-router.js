const router = require('express').Router()
const {checkAccountPayload,checkAccountId} = require('./accounts-middleware')
const Accounts = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Accounts.getAll()
    res.json(data)
  } catch(err){
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Accounts.getById(req.params.id)
    res.json(data)
  } catch(err){
    next(err)
  }
})

router.post('/', checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await Accounts.create(req.body)
    res.json(account)
  }catch(err){
    next(err)
  }
})

router.put('/:id', checkAccountPayload, checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Accounts.updateById(req.params.id, req.body)
    res.json(data)
  }catch(err){
    next(err)
  }
});

router.delete('/:id', checkAccountId, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Accounts.deleteById(req.params.id)
    res.json(data)
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = router;
