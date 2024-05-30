import React, { FC } from 'react'
import { ICourse } from '../../types/ICourse'
import { title } from 'process'
type Props = {
    courses: ICourse
}
const Card: FC<Props> = ({ courses }) => {
    return (
        <div className='card'>
            <div className='card_image' style={{ backgroundColor: courses.bgColor }}>
                <img src={courses.image} alt="" />
            </div>
            <div className="card_title">{courses.name}</div>
        </div>
    )
}

export default Card
