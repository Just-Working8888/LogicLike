
import { FC } from 'react';
type Props = {
    tags: string[]
    curentTags: string | null
    setCurentTags: Function
}
const SideBar: FC<Props> = ({ tags, setCurentTags, curentTags }) => {
    return (
        <div className='sidebar'>
            {
                tags.map((tag, index) =>
                    <div
                        tabIndex={0}
                        role="button"
                        aria-pressed={curentTags === tag}
                        onClick={() => setCurentTags(tag)}
                        className={
                            curentTags === tag
                                ? 'sidebar_item active'
                                : 'sidebar_item'}
                        key={index}>
                        {tag}
                    </div>
                )
            }
        </div>
    );
};

export default SideBar;
