import React from 'react'
import Card from './Card';
import "./Candidates.css";
import { electionData } from './data';
import { useLocation } from 'react-router-dom';

const Candidates = () => {
    const location = useLocation();
    const id = location.pathname.split("/").at(1);

    const candidateData = electionData.find(ele => ele.id === id);

    return (
        <div className='candidates'>
            <h1>Bye Election to Assembly Constituencies: Results 2022</h1>
            <h3 className='title'>Assembly Constituency <span className='place'>{candidateData.wardNo} - {candidateData.city}</span> <span className='state'>({candidateData.state})</span></h3>
            <div className='container'>
                {candidateData.candidates?.map((cad) => (
                    <Card data={cad} />
                ))}
            </div>
        </div>
    )
}

export default Candidates