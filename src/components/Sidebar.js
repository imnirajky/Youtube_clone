import { useSelector } from 'react-redux';

const Sidebar = () => {
    const showMenu = useSelector(store=>store.app.isMenuOpen);

    if(!showMenu) return null // Early return pattern 
    
    return (
        <div className="flex flex-col w-full p-2 shadow-lg shadow-pink-400">
            <div className="border-b border-gray-300 flex flex-col align-middle">
                <button className="flex items-center font-semibold text-lg">
                    <img className="w-10 m-4" src="https://cdn-icons-png.flaticon.com/128/263/263115.png" alt="home" />
                    Home
                </button>
                <button className="flex items-center font-semibold text-lg">
                    <img className="w-10  m-4" src="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg" alt="shorts" />
                    Shorts
                </button>
                <button className="flex items-center font-semibold text-lg">
                    <img className="w-10  m-4" src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" alt="subscriptions" />
                    Subscriptions
                </button>
            </div>
            <div className="border-b border-gray-300 flex flex-col">
                <button className="flex items-center font-semibold text-lg">
                    <img className="w-10  m-4" src="https://static.thenounproject.com/png/1126650-200.png" alt="trending" />
                    Trending
                </button>
                <button className="flex items-center font-semibold text-lg">
                    <img className="w-10  m-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSy59qugzkDed5Bn1ncgHnYreasEid9xCHQ&usqp=CAU" alt="music" />
                    Music
                </button>
                <button className="flex items-center font-semibold text-lg">
                    <img className="w-10  m-4" src="https://static-00.iconduck.com/assets.00/live-icon-2048x1506-jedkz877.png" alt="live" />
                    Live
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
