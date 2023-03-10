import React from 'react';
import { CreateData } from '@carthus/core';
import UserSchema from './Schema/User.schema'
import UserSource from './Source/User.source'

const UserData = CreateData({
    Schema: UserSchema,
    Source: UserSource,
    middleware: [] as const
})

export default UserData;