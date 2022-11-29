import { CategorySchema } from "../schema/category.schema.js";
import { UserSchema } from "../schema/user.schema.js";

export class CategoryRepository {
  constructor() {}

  /**
   * Transforms a domain category into a database category
   * @param domainUseCategory Domain category
   * @returns Database category
   */
  toPersistance(domainCategory) {
    const { id, name, itemId } = domainCategory;

    return {
      _id: id,
      name,
      itemId,
    };
  }

  findByid(id) {
    return CategorySchema.findById({ _id: id }).exec();
  }

  findCategory(category) {
    const name = category;

    return CategorySchema.findOne({ name }).exec();
  }

  async create(domainCategory) {
    const persistanceCategory = this.toPersistance(domainCategory);
    const item = new UserSchema(persistanceCategory);

    await item.save();
  }
}
