import Card from '../components/Card';
import React from 'react';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return isLoading ? (
      [...Array(12)].map((item, index) => (
        <Card
          key={index}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite={onAddToFavorite}
          loading={isLoading}
          {...item}
        />
      ))
    ) : filtredItems.length > 0 ? (
      filtredItems.map((item, index) => {
        return (
          <Card
            key={index}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={onAddToFavorite}
            loading={isLoading}
            //   favorited={favorites}
            {...item}
          />
        );
      })
    ) : (
      <div className="emptyItems d-flex align-center justify-center flex-column flex">
        <h2>Кроссовок с таким названием не найдено!</h2>
        <p className="opacity-6">Попробуйте снова</p>
      </div>
    );
  };

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
