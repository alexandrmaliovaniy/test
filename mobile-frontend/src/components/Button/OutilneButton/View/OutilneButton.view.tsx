import React, { FC } from 'react';
import "./OutilneButton.styles.scss";
import Button, {IButtonProps} from "../../Button";

interface IOutilneButtonProps extends IButtonProps {

}

const OutilneButtonView: FC<IOutilneButtonProps> = ({className, ...props}) => {
    return <Button className={`OutilneButton ${className}`} {...props} />;
};

export default OutilneButtonView;
export type { IOutilneButtonProps }