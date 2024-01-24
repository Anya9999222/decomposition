import './Elements.css'
import Heading from './Heading';
import ContentString from './ContentString';

interface ArticleProps {
    heading: string,
    info: string[],
    img?: string,
    key: number
}

// Отрисовывает элементы нижнего блока новостей

const Article = ({heading, info, img}: ArticleProps) => {
    return(
        <article className='article'>
            <Heading item={heading} bold={true} />
            {img ? <img src={img} alt=''></img> : ''}
            {info.map(i => 
            <ContentString key={Math.random()}>
                {i}
            </ContentString> )}
        </article>
    )
}

export default Article