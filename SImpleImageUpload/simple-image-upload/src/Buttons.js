import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props =>
    <div className= 'buttons fadein'>
        <div classNamer='button'>
            <lable htmlFor='single'>
                <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
            </lable>
            <input type='file' id='single' onChange={props.onChange} /> 
        </div>

        <div className='button'>
            <lable htmlFor='multi'>
                <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
            </lable>
            <input type='file' id='multi' onChange={props.onChange} multiple />
        </div>
    </div>