import React, { FC } from 'react';
import "./Pagination.styles.scss";

interface IPaginationProps {
    value: number;
    length: number;
}

const PaginationView: FC<IPaginationProps> = ({value, length, ...props}) => {
    const dots = [];
    for (let i = 0; i < length; i++) {
        dots.push(<div className={`Dot ${value === i && 'ActiveDot'}`} />)
    }

    return <div className={'Pagination'}>
        {dots}
    </div>;
};

export default PaginationView;
export type { IPaginationProps }