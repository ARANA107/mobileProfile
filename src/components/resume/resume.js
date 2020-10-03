import React, { useEffect } from 'react'

export const Resume = (props) => {

    useEffect(() => {
        console.log('hello');
        props.setT(0);
    }, []);

    return (
        <div>
            {console.log(props.changeToggle)}
        </div>
    )
}

