import Heading from "../Elements/Heading"
import newsHeaderData from "../Data/NewsHeaderData"
import HeadingUl from "../Elements/HeadingUL";
import './NewsBlock.css'
import { news } from "../Data/NewsHeaderData";
import ContentString from "../Elements/ContentString";
import { sidebar } from "../Data/NewsHeaderData";
import { exchangeRate } from "../Data/NewsHeaderData";

// Блок отвечает за отрисовку верхнего блока новостей

const NewsBlock = () =>  {
    const date = new Date();
    const options = {
        day: 'numeric', month: 'long', weekday: 'long', hour: '2-digit', minute: '2-digit'
    }
    return(
        <div className="news-block">
            <div className="news-block-news">
                <div className="news-header">
                    <HeadingUl list={newsHeaderData} classAdd="news-list"/>
                    <span className="date">{date.toLocaleDateString('ru-Ru', options)}</span>
                </div>
            <div className="news">
                <div className="news-body">
                    {news.map((i)=> <ContentString key={i.id}>
                        <img className="logo" src={i.img}></img>
                        <div className="string">{i.text}</div>
                    </ContentString>)}
                </div>
                </div>
                <div className="currency-container">
                    <HeadingUl list={exchangeRate} classAdd="currency"/>
                </div>
                
                </div>
                {sidebar.map(i =>
                    <div className="news-sidebar" key={1}>
                        <img className="side-img"src={i.img}></img> 
                        <Heading item={i.heading} bold={true}/>
                        <ContentString>
                            <div className="string">{i.text}</div>
                        </ContentString>
                    </div>
                )}
            
        </div>
    )
}

export default NewsBlock