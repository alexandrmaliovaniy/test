import WalkthroughService from './Walkthrough.service';
import React, { FC, ReactNode, useContext } from 'react';
import WalkthroughContext from './Walkthrough.context'

type IServiceProps = Parameters<typeof WalkthroughService>
export const WalkthroughProvider: FC<{ children: ReactNode; props: IServiceProps }> = ({children, props = []}) => {
	const service = WalkthroughService(...props);
	return <WalkthroughContext.Provider value={service}>{children}</WalkthroughContext.Provider>
}

export const useWalkthrough = (): ReturnType<typeof WalkthroughService> => useContext(WalkthroughContext);