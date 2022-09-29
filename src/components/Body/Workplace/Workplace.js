import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import Swal from 'sweetalert2'

const Workplace = (props) => {
    const [breaktimes, setBreaktimes] = useState(0);
    const { carts } = props;
console.log(carts);
    let totalTime = 0;
    carts.forEach(cart => {
        totalTime = totalTime + cart.time;
    });

    // const AddBreak = (event) => {
    //     setBreaktimes(event);
    //     localStorage.setItem('break-time', event);
    // };

    useEffect(() => {
        const getLocalStore = localStorage.getItem('break-time');
        if (getLocalStore) {
            setBreaktimes(getLocalStore);
        }

    }, [breaktimes]);

    // const Alert = () => {
    //     Swal.fire(
    //         'Good job!',
    //         'Task Completed!',
    //         'success'
    //     )

    return (
        <div className='workplace_conatiner'>
            {/* <div>
                <h3>Information</h3>
                <p><strong>Name:</strong> Rahman</p>
                <p><strong>Skills:</strong>Tailwind, JavaScript, React</p>
            </div> */}
            {/* <div>
                <h3>Add a Break</h3>
                <div className='break-btn'>
                    <button onClick={(event) => AddBreak(event.target.innerText)}><strong>10</strong></button>
                    <button onClick={(event) => AddBreak(event.target.innerText)}><strong>20</strong></button>
                    <button onClick={(event) => AddBreak(event.target.innerText)}><strong>30</strong></button>
                    <button onClick={(event) => AddBreak(event.target.innerText)}><strong>40</strong></button>
                </div>
            </div> */}
            {/* <div className='game-details'>
                <h3>Game Details</h3>
                <div className='game-time'>
                    <h3>Game Time</h3>
                    <p>{totalTime} minute</p>
                </div>
                <div className='break-time'>
                    <h3>Break Time</h3>
                    <p>{breaktimes} Secounds</p>
                </div>
                <div className='complete-btn'>
                    <button onClick={"Done"}>Game Completed</button>
                </div>
            </div> */}
        </div>
    );
};

export default Workplace;