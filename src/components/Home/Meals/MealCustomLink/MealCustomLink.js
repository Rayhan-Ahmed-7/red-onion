import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const MealCustomLink = ({children,to,...props}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({path:resolved.pathname});
    return (
        <>
        <Link className={`meal-link ${match? 'text-rose-500 active':''}`}
        to={to}
        {...props}
        >
        {children}
        </Link>
        </>
    );
};

export default MealCustomLink;