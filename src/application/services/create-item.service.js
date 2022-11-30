import { CategoryRepository } from "../../infrastructure/respositories/category-respository.js";
import { ItemRepository } from "../../infrastructure/respositories/item-repository.js";
import { ConflictException } from "../errors/conflict.exception.js";

export const createItemService = async (item, itemId, userId) => {
  const itemRepository = new ItemRepository();
  const categoryRepository = new CategoryRepository();

  const existingItemById = await itemRepository.findByid(itemId);
  if (existingItemById) throw new ConflictException("Identificador duplicado");

  const existingCategory = await categoryRepository.findCategory(item.category);

  if (!existingCategory)
    categoryRepository.create({
      id,
      name: item.category,
      itemId: item.id,
      ownerId: userId,
    });

  if (existingCategory) await itemRepository.create(item);
};
