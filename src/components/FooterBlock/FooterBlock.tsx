import './FooterBlock.css'
import Article from '../Elements/Article'
import { footerInfo } from '../Data/FooterBlockData'

// Блок отвечает за отрисовку нижнего блока новостей и баннера

const FooterBlock = () => {
    return (
        <div className="footer-block">
            <div className="banner">
                <img src="https://dummyimage.com/600x90/25544b/0f962c.png" alt="" />
            </div>
            <div className="footer-main">
                {footerInfo.map(i => 
                <Article key={i.id} 
                    heading={i.heading} 
                    info={i.info} 
                    img={i.img}
                />)}
            </div>
        </div>
    )
}

export default FooterBlock