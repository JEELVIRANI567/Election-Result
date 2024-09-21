import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';
import { electionData } from '../../Candidates/data';
const Hero = () => {
    return (
        <div className='hero'>
            <h1>Bye Election to Assembly Constituencies: Results 2022</h1>
            <div class="results-grid">
                {electionData.map((data) => {
                    const findWon = data.candidates.find(data => data.result === "Won");
                    return (
                        <Link to={`/${data.id}/candidates`} class="result-card">
                            <h3>{data.city} ({data.wardNo})</h3>
                            <p className='stateName'>{data.state}</p>
                            <p class="won">{findWon.result}</p>
                            <p class="candidate">{findWon.name}</p>
                            <p class="party">{findWon.partyName}</p>
                        </Link>
                    )
                })}
            </div>

            {/* <div class="results-grid">
                <Link to="/1/candidates" class="result-card">
                    <h3>PATNA (60)</h3>
                    <p>Bihar</p>
                    <p class="won">WON</p>
                    <p class="candidate">NIKHIL KUMAR</p>
                    <p class="party">Bharatiya Janata Party</p>
                </Link>
                <div class="result-card">
                    <h3>BILASPUR (10)</h3>
                    <p>Himachal Pradesh</p>
                    <p class="won">WON</p>
                    <p class="candidate">PRATIBHA SINGH</p>
                    <p class="party">Indian National Congress</p>
                </div>
                <div class="result-card">
                    <h3>JALGAON (38)</h3>
                    <p>Maharashtra</p>
                    <p class="won">WON</p>
                    <p class="candidate">SURESH DHANORKAR</p>
                    <p class="party">Indian National Congress</p>
                </div>
                <div class="result-card">
                    <h3>JODHPUR (51)</h3>
                    <p>Rajasthan</p>
                    <p class="won">WON</p>
                    <p class="candidate">GAJENDRA SINGH SHEKHAWAT</p>
                    <p class="party">Bharatiya Janata Party</p>
                </div>
                <div class="result-card">
                    <h3>BHOPAL (123)</h3>
                    <p>Madhya Pradesh</p>
                    <p class="won">WON</p>
                    <p class="candidate">SADHVI PRAGYA SINGH THAKUR</p>
                    <p class="party">Bharatiya Janata Party</p>
                </div>
                <div class="result-card">
                    <h3>CHANDIGARH (34)</h3>
                    <p>Punjab</p>
                    <p class="won">WON</p>
                    <p class="candidate">ROHIT KUMAR</p>
                    <p class="party">Aam Aadmi Party</p>
                </div>
                <div class="result-card">
                    <h3>CHENNAI (75)</h3>
                    <p>Tamil Nadu</p>
                    <p class="won">WON</p>
                    <p class="candidate">M.K. STALIN</p>
                    <p class="party">Dravida Munnetra Kazhagam</p>
                </div>
                <div class="result-card">
                    <h3>DEHRADUN (4)</h3>
                    <p>Uttarakhand</p>
                    <p class="won">WON</p>
                    <p class="candidate">SANJAY BHATIA</p>
                    <p class="party">Indian National Congress</p>
                </div>
            </div> */}


        </div>
    )
}

export default Hero
