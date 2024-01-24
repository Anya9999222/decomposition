import './Elements.css'

interface Props {
    item: string,
    bold: boolean,
    additional?: string
}

// Отрисовывает все заголовки

const Heading = ({item, bold, additional}: Props) => {
    
    return(
        <>
        <a className={bold ? `heading-bold` : `heading`} href="#0">{item}</a>
        {additional ? <div className='additional-info'>{additional}</div> : ''}
        </>
    )
}

export default Heading