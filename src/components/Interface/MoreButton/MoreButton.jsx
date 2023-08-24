export const MoreButton = ({ showMore }) => {
    return (
        <button
            className='movies-cards__more hover-link'
            aria-label='Добавить еще фильмов'
            onClick={showMore}
        >
            Ещё
        </button>
    );
};