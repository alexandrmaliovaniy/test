import AuthService from './Auth.service';
import React, { FC, ReactNode, useContext } from 'react';
import AuthContext from './Auth.context'

type IServiceProps = Parameters<typeof AuthService>
export const AuthProvider: FC<{ children: ReactNode; props?: IServiceProps }> = ({children, props = []}) => {
	const service = AuthService(...props);
	return <AuthContext.Provider value={service}>{children}</AuthContext.Provider>
}

export const useAuth = (): ReturnType<typeof AuthService> => useContext(AuthContext);