import { schema } from "normalizr";

const userSchema = new schema.Entity("user");
const userArraySchema = new schema.Array(userSchema);

export { userSchema, userArraySchema };
