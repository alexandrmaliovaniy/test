import React, { FC } from 'react';
import "./PrimaryButton.styles.scss";
import Button, {IButtonProps} from "../../Button";

interface IPrimaryButtonProps extends IButtonProps {

}

const PrimaryButtonView: FC<IPrimaryButtonProps> = ({className, ...props}) => {
    return <Button className={`PrimaryButton ${className}`} {...props} />;
};

export default PrimaryButtonView;
export type { IPrimaryButtonProps }