const Batch = require('../models/batch.model')

async function getAllBatches(req, res) {
  try {
    console.log(req.headers)
    const batchs = await Batch.findAll()
    return !batchs ? res.status(404).send('No batchs found') : res.status(200).json(batchs)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneBatch(req, res) {
    try {
        const batch = await Batch.findByPk(req.params.id)
        if (batch) {
            return res.status(200).json(batch)
        } else {
            return res.status(404).send('Batch not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createBatch(req, res) {
    try {
        const batch = await Batch.create(req.body)
      return res.status(200).json({ message: 'Batch created', batch: batch })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

async function updateBatch(req, res) {
	try {
		const [batchExist, batch] = await Batch.update(req.body, {
			returning: true,
			where: {
				batchCode: req.params.id,
			},
		})
        if (batchExist !== 0) {
			return res.status(200).json({ message: 'Batch updated', batch: batch })
		} else {
			return res.status(404).send('Batch not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteBatch(req, res) {
	try {
		const batch = await Batch.destroy({
			where: {
				batchCode: req.params.id,
			},
		})
		if (batch) {
			return res.status(200).json('Batch deleted')
		} else {
			return res.status(404).send('Batch not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
    getAllBatches,
    getOneBatch,
    createBatch,
    updateBatch,
    deleteBatch
  }