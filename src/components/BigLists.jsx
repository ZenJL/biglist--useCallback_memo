import React, { useState, memo } from 'react'

function BigLists({handleClick}) {
    const [list, setList] = useState([
        1,2,3,4,5,
    ])

    console.log('trigger big list re-render ~~~ sth goes wrong');

    return (
        <>
            {list.map(item => (
                <div key={item}>
                    this is item {item} {' '} {' '}{' '}
                    {' '}
                    <button type='button' onClick={() => handleClick(item)}>Click here for item {item}</button>
                </div>
            ))}
        </>
    )
}

export default memo(BigLists)
