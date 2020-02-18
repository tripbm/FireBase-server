import { merge } from "lodash";

import typeDefsUser from "../graphql/schema/user";
import resolversUser from "../graphql/resolves/user";

const typeDefs = [typeDefsUser];

const resolvers = merge({}, resolversUser);

export { typeDefs, resolvers };
