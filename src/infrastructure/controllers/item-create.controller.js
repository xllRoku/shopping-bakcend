export const itemCreateController = async ({ body }, res, next) => {
  try {
    const item = validateItemBody(body);

    await createItemService(item);

    return res.send("El item se ha creado correctamente");
  } catch (error) {
    return next(error);
  }
};
