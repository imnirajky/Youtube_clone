import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const showMenu = useSelector((store) => store.app.isMenuOpen);

    if (!showMenu) return null; // Early return pattern

    return (
        <div className="flex flex-col w-52 p-2 shadow-lg shadow-pink-400 col-span-1">
            <div className="border-b border-gray-300">
                <Link to="/">
                    <button className="flex items-center font-semibold text-lg py-2">
                        <img className="w-10 m-2" src="https://cdn-icons-png.flaticon.com/128/263/263115.png" alt="home" />
                        Home
                    </button>
                </Link>
                <Link to="/shorts">
                    <button className="flex items-center font-semibold text-lg py-2">
                        <img className="w-10 m-2" src="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg" alt="shorts" />
                        Shorts
                    </button>
                </Link>
                <Link to="/subscriptions">
                    <button className="flex items-center font-semibold text-lg py-2">
                        <img className="w-10 m-2" src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" alt="subscriptions" />
                        Subscriptions
                    </button>
                </Link>
            </div>
            <div className="border-b border-gray-300">
                <Link to="/trending">
                    <button className="flex items-center font-semibold text-lg py-2">
                        <img className="w-10 m-2" src="https://static.thenounproject.com/png/1126650-200.png" alt="trending" />
                        Trending
                    </button>
                </Link>
                <Link to="/music">
                    <button className="flex items-center font-semibold text-lg py-2">
                        <img className="w-10 m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSy59qugzkDed5Bn1ncgHnYreasEid9xCHQ&usqp=CAU" alt="music" />
                        Music
                    </button>
                </Link>
                <Link to="/live">
                    <button className="flex items-center font-semibold text-lg py-2">
                        <img className="w-10 m-2" src="https://static-00.iconduck.com/assets.00/live-icon-2048x1506-jedkz877.png" alt="live" />
                        Live
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
