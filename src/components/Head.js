import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import {SEARCH_SUGGESTION_API} from '../utils/constant';


const Head = ()=>{
    const [search, setSearch] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([]);
    const [searching, setSearching] = useState(false);
    console.log(searching);
    useEffect(()=>{
        async function searchQuery(){
            const data = await fetch(SEARCH_SUGGESTION_API + search);
            const searchResult = await data.json();
            setSearchSuggestion(searchResult[1]);
            console.log(searchSuggestion);
        }
        const timeoutID = setTimeout(searchQuery, 2000);

        return ()=>clearTimeout(timeoutID)
    }, [search]);

    const dispatch = useDispatch();
    function toggleMenuHandler(){
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col p-3 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img 
                className='h-14 hover:bg-slate-200'     
                onClick={()=>toggleMenuHandler()}
                src="https://www.svgviewer.dev/static-svgs/430461/hamburger-menu-more.svg" 
                alt="menu" />
                <img 
                className='h-14 mx-2'
                src="https://images.indianexpress.com/2023/08/youtube-logo-featured.jpg" 
                alt="youtube-logo" />
            </div>
            <div className='col-span-10 pl-96'>
                <input className="border border-gray-400 w-1/2 h-12 my-3 rounded-l-full text-lg px-4" 
                placeholder='Search'
                type="text" 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onFocus={()=>setSearching(true)}
                onBlur={()=>setSearching(false)}
                />
                <button className="border border-gray-400 w-14 h-12 py-3 rounded-r-full bg-gray-100">🔍</button>
                
                {(searching)&&(<div className='fixed bg-white border-lg w-1/3 shadow-xl rounded-lg'>
                    <ul>
                    {searchSuggestion.map((suggest)=><li className="border-b-2 mb-4 p-2 text-lg" key={suggest}>🔍 {suggest}</li>)}
                    </ul>   
                </div>)}
                
            </div>
            <div>
                <img 
                className='h-12 col-span-1'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7l03FcoTDB_pH1zU9QKOx9heL2cMLLO3lk60GlMC0A&s" 
                alt="user-icon" />
            </div>
        </div>
    );
}

export default Head;
