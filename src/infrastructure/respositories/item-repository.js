import { UserSchema } from "../schema/user.schema.js";

export class ItemRepository {
  constructor() {}

  /**
   * Transforms a domain item into a database item
   * @param domainUseItem Domain item
   * @returns Database item
   */
  toPersistance(domainItem) {
    const { id, name, note, image, category } = domainItem;

    return {
      _id: id,
      name,
      note,
      image,
      category,
    };
  }

  findByid(id) {
    return UserSchema.findById({ _id: id }).exec();
  }

  async create(domainItem) {
    const persistanceItem = this.toPersistance(domainItem);
    const item = new UserSchema(persistanceItem);

    await item.save();
  }
}
