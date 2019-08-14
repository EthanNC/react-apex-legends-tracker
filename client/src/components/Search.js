import React, {useState} from "react";
import {Redirect} from 'react-router-dom'

const Search = () => {

    const [submitted, setSubmitted] = useState(false);
    const [username, setUserame] = useState("");
    const [platform, setPlatform] = useState("psn");

    const onSubmit = (evt) => {
        evt.preventDefault();
        if(username){
            setSubmitted(true)
        }
    }

    return (
        <div className="search">
            {submitted && <Redirect to={`/profile/${platform}/${username}`}/> }
            <h1>Track Player Stats</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label for='platform'>Platform</label>
                    <select name='platform' id='platform' onChange={e => setPlatform(e.target.value)} >
                        <option value='psn'>Playstation</option>
                        <option value='xbl'>Xbox</option>
                        <option value='origin'>Origin</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label for='username'>Username</label>
                    <input
                        type='text'
                        name='text'
                        id='username'
                        onChange={e => setUserame(e.target.value)}
                        placeholder='Origin ID, Xbox Live gamertag, PSN ID, etc'
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Submit' className='btn' />
                </div>
            </form>
        </div>
    );
};

export default Search;
