import BaseDatasource from "./base";

export default class UserDS extends BaseDatasource {
  constructor(database) {
    super(database);
    this.userRef = this.database.firestore().collection("users");
  }

  async getUserByID(id) {
    const userQuery = await this.userRef.doc(id).get();
    const user = userQuery.data();
    user.id = id;
    user.birthday = user.birthday ? user.birthday._seconds : null;
    return user;
    // const { _id } = args;
    // const query = await admin.firestore().doc(`users/${_id}`).get();
    // let user = query.data();
    // if (user) user.id = query.id;
    // return user;
  }
}
