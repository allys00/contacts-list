import Contact from "../models/Contact.model";
import { NotFoundError, BadRequestError } from "../utils/errors";
import { calculateAge } from "../utils/functions";
export default {

  create: async (req, res) => {
    const contact = await Contact.create({
      ...req.body
    });

    contact.age = calculateAge(contact.birthday);
    if (contact.age < 0) {
      throw new BadRequestError("Data de nascimento inválida");
    } else if (contact.age < 18) {
      throw new BadRequestError("Contato deve ser maior de idade")
    }

    res.status(200).send(contact);
  },

  list: async (_, res) => {
    const contacts = await Contact
      .find()
      .where({ active: true })
      .map(contact => {
        const birthday = new Date(contact.birthday);
        contact.age = calculateAge(birthday);
        return contact
      });;

    res.status(200).json(contacts);
  },

  details: async (req, res) => {
    const _id = req.params.id;
    const contact = await Contact.findById(_id);
    if (!contact || !contact.active) throw new NotFoundError("Contato não encontrado");
    res.status(200).send(contact)
  },

  deactivate: async (req, res) => {
    const _id = req.params.id;
    const contact = await Contact.findByIdAndUpdate(_id, { active: false });
    if (!contact) throw new NotFoundError("Contato não encontrado");
    res.status(204).send()
  },

  delete: async (req, res) => {
    const _id = req.params.id;
    await Contact.findByIdAndDelete(_id);
    res.status(204).send();
  }

};
