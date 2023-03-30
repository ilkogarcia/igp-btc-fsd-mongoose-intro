const Dog = require('../models/dogs')

module.exports = class DogsCtrl {

  static getAllDogs = async (req, res) => {
    const allDogs = await Dog.find()
    return res.status(200).json(allDogs)
  }
  
  static getDogById = async (req, res) => {
    const { id } = req.params;
    const dog = await Dog.findById(id)
    return res.status(200).json(dog)
  }
  
  static addDog = async (req, res) => {
    const newDog = new Dog({ ...req.body })
    const insertedDog = await newDog.save()
    return res.status(201).json(insertedDog)
  }
  
  static updateDog = async (req, res) => {
    const { id } = req.params;
    await Dog.updateOne({ id }, req.body);
    const updatedDog = await Dog.findById(id)
    return res.status(200).json(updatedDog)
  }
  
  static deleteDog = async (req, res) => {
    const { id } = req.params
    const deletedDog = await Dog.findByIdAndDelete(id)
    return res.status(200).json(deletedDog)
  }
}
