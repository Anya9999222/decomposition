import Heading from "./Heading"

interface ArrayProps {
    id: number,
    text: string,
    additional?: string
}
interface Props {
    list: ArrayProps[],
    classAdd?: string
}

// Отрисовывает список заголовков

const HeadingUl = ({list, classAdd}: Props) => {
    return(
        <ul className={`heading-list `}>
            {list.map((i, index) => 
                <li className={`heading-item ${classAdd ? classAdd : ``}`} key={index}>
                    <Heading item={i.text} bold={false} additional={i.additional}/>
                </li>
            )}
        </ul>
    )
}

export default HeadingUl