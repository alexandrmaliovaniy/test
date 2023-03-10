import React from 'react';
import { IDataProvider } from '@carthus/core';

const UserSource = async () => {
    return new Promise((res, reject) => {
        setTimeout(res, 0, {
            firstName: "Alex",
            lastName: "Maliovaniy",
            isAdmin: false,
            isAuth: false,
        })
    })
}

export default UserSource;