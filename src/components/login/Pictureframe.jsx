import rootImage from '../../assets/a-man-writing-a-blog-on-a-computer.webp';
import { memo } from 'react';
function Pictureframe(){
    return(
        <section className='float-right w-50 h-100 h-min-700px pl-3 content-centered'>
            <figure className='relative rounded-05 hide-overflow'>
                <img src={rootImage} className='w-100 middle' alt="root-image"/>
                <figcaption className='h-100p p-15 absolute bottom-0 left-0 content-bottom overlay'>
                    <h4 className='fs-6 font-weight-600 italic lh-3'>prasanth<span className='text-primary'>.software</span></h4>
                    <p className='fs-4 lh-3 italic'>Welcome to our brand new content management system. Let’s create and manage all your blog contents here.</p>
                </figcaption>
            </figure>
        </section>
    );
}
export default memo(Pictureframe);