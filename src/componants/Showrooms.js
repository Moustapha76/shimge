import React, {useContext} from 'react';
import { GlobalContext } from './partials/GlobalContext';
import { Image } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
export default function Properties(){
    const { showroomslist } = useContext(GlobalContext);
    return(
       <main>
         <section className="showrooms">
            <h2 className='title'>Nos showrooms <span className='subtitle'>Venez nous rendre visite</span> </h2>
            <Image.PreviewGroup preview={{ onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),}} >
                <div className="list-showrooms">
                    {showroomslist.map((showroom, key)=>{
                        return(
                        <div className='showroom-item' key={key}>
                            <Image src={ showroom.image } alt={ showroom.lieu } />
                            <div className='showroom-view'>
                                <h3>{ showroom.lieu }</h3>
                                <a href={`/showroom/${showroom.id}`}>Visiter <EyeOutlined /></a>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </Image.PreviewGroup>
        </section>
       </main>
    )
}