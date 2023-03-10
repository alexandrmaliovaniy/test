import React from 'react';
import { z } from 'zod';

const UserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    isAdmin: z.boolean(),
    isAuth: z.boolean()
});

type IUserSchema = z.infer<typeof UserSchema>;

export type { IUserSchema };
export default UserSchema;