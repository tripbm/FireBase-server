import admin from "firebase-admin";
const resolvers = {
  Query: {
    getUser: async (_, args, { userDS }, info) => userDS.getUserByID(args._id),
    getListUser: async (obj, args, context, info) => {
      let users = [];
      const user = await admin
        .firestore()
        .collection("users")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            let user = doc.data();
            user.id = doc.id;
            users.push(user);
          });
        });
      return users;
    },
  },
  Mutation: {
    createUser: async (obj, args, context, info) => {
      const { data } = args;
      const createUser = await admin.firestore().collection("users").add(data);
      let user = data;
      user.id = createUser.id;
      return user;
    },
    updateUser: async (obj, args, context, info) => {
      const { _id, data } = args;
      await admin.firestore().collection("users").doc(_id).update(data);
      let user = data;
      user.id = _id;
      return user;
    },
    deleteUser: async (obj, args, context, info) => {
      const { _id } = args;
      const user = await admin
        .firestore()
        .collection("users")
        .doc(_id)
        .delete();
      return true;
    },
  },
};

export default resolvers;
