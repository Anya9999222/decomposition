import './SearchBlock.css';

import HeadingUl from '../Elements/HeadingUL';
import { menu } from '../Data/SearchBlockData';
import ContentString from '../Elements/ContentString';

// Блок отвечает за отрисовку всех элементов поиска
const SearchBlock = () => {
    return(
        <div className="search-block">
            <div className='ya-logo'>
                <img src="https://dummyimage.com/75x20/25544b/0f962c.png" alt="" />
            </div>
            <div className='search-container'>
                <HeadingUl list={menu}/>
                <label className='search-group'>
                    <input className='input'></input>
                    <button className='button'>Найти</button>
                </label>
                <div className='input-adding'>
                <ContentString>
                    {'Найдется все. Например, '}
                </ContentString>
                <ContentString addClass='transparent-text'>
                    {' фаза луны сегодня'}
                </ContentString>
                </div>
                
            </div>
        </div>
    )
}

export default SearchBlock