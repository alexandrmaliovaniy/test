import React, {FC, HTMLAttributes} from 'react';
import "./Button.styles.scss";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    wide?: boolean;
}

const ButtonView: FC<IButtonProps> = ({className, wide, ...props}) => {
    return <button className={`Button ${wide && 'Wide'} ${className}`} {...props} />;
};

export default ButtonView;
export type { IButtonProps }