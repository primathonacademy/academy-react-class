const MovieCard = (props) => {
  return (
    <div className='w-full bg-secondary-color shadow-md relative overflow-hidden rounded-md bg-gray-200'>
      <img
        src={
          props.movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w1280${props.movie.backdrop_path}`
            : `https://picsum.photos/1280/${720 + props.index}`
        }
        alt='Trolls Band Together'
        className='w-full'
      />
      <div className='flex gap-1 items-center justify-between p-2 sm:p-4 lg:p-8 tracking-wide'>
        <h3>{props.movie.title}</h3>
        <span className='bg-primary-color p-1/4 p-1/2 rounded-md font-bold'>
          {props.movie.vote_average}
        </span>
      </div>
      <div className='bg-white p-8 absolute left-0 bottom-0 right-0 max-h-full transform translate-y-full transition-transform duration-300 ease-in hover:translate-y-0'>
        <h3>Overview</h3>
        {props.movie.overview}
      </div>
    </div>
  );
};

export default MovieCard;
