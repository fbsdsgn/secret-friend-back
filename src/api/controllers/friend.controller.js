const Friend = require('../../models/friends')


module.exports.list = async (req, res) => {
  try {
    const friends = await Friend.findAll();

    return res.status(200).send(friends);
  } catch (err) {
    return res.status(400).send({ error: err })
  }
}

module.exports.create = async (req, res) => {
  try {
    const friend = await Friend.create(req.body);
    return res.status(201).send(friend);
  } catch (err) {
    return res.status(400).send({ error: err })
  }
}

module.exports.retrieve = async (req, res) => {
  try {

    const { id } = req.params
    const friend = await Friend.findByPk(id);

    return res.status(200).json(friend);
  } catch (err) {
    return res.status(400).send({ error: err })
  }
}

module.exports.update = async (req, res) => {
  try {

    let { id } = req.params

    const friend = await Friend.findByPk(id)

    await friend.update(req.body)

    res.status(200).json(friend)
  } catch (err) {
    return res.status(400).send({ error: err })
  }
}

module.exports.destroy = async (req, res) => {
  try {
    let { id } = req.params

    const friend = await Friend.findByPk(id)

    await friend.destroy()

    return res.status(204).send()
  } catch (err) {
    return res.status(400).send({ error: err })
  }
}