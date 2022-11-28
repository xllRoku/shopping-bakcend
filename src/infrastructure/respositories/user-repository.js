import { UserSchema } from "../schema/user.schema.js";

export class UserRepository {
  constructor() {}

  /**
   * Transforms a domain user into a database user
   * @param domainUser Domain user
   * @returns Database user
   */
  toPersistance(domainUser) {
    const { id, name, email, password } = domainUser;

    return {
      _id: id,
      name: name,
      email: email,
      password: password,
    };
  }

  findByid(id) {
    return UserSchema.findById({ _id: id }).exec();
  }

  findByEmail(email) {
    return UserSchema.findOne({ email }).exec();
  }

  async create(domainUser) {
    const persistanceUser = this.toPersistance(domainUser);

    console.log(persistanceUser);

    const user = new UserSchema(persistanceUser);

    await user.save();
  }
}
