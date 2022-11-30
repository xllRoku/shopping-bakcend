import { createItemService } from "../../application/services/create-item.service.js";

export const itemCreateController = async (req, res, next) => {
  try {
    const { body } = req;
    const { userId } = req;
    const itemId = uuid();

    const item = validateItemBody(body);

    await createItemService(item, itemId, userId);

    return res.send("El item se ha creado correctamente");
  } catch (error) {
    return next(error);
  }
};
