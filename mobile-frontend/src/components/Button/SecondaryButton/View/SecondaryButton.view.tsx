import React, { FC } from 'react';
import "./SecondaryButton.styles.scss";
import Button, {IButtonProps} from "../../Button";

interface ISecondaryButtonProps extends IButtonProps {

}

const SecondaryButtonView: FC<ISecondaryButtonProps> = ({className, ...props}) => {
    return <Button className={`SecondaryButton ${className}`} {...props} />;
};

export default SecondaryButtonView;
export type { ISecondaryButtonProps }