import './Elements.css';

interface ContentStringProps {
    children: React.ReactNode,
    addClass?: string,
    key?: number
}

// Отрисовывает контент, который представлен одной строкой

const ContentString = ({children, addClass}: ContentStringProps) => {
    return(
        <div className={`content-string ${addClass ? addClass : ''}`}>
            {children}
        </div>
    )
}

export default ContentString