import { NavLink } from 'react-router-dom';
import banner_img from '../../assets/Banner.png';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen rounded-3xl">
        <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse md:gap-12 lg:gap-24">
          <img
            src={banner_img}
            className="max-w-sm rounded-lg shadow-2xl "
          />
          <div className="">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-12">Books to freshen up <br /> your bookshelf</h1>
            
            <NavLink to='/listed_book'><button className="btn bg-[#23BE0A] text-white">View The List</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
