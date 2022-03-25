import React from 'react'
import Styles from './Card.module.css'


const Card = (props) => {
    return (
        <div>
            <div className={Styles.bottom}>
                <div>
                    <div className={Styles.container}>
                        {props.container}
                    </div>
                </div>
                <br />
                <>{props.bottom}</>
            </div>
        </div>
    );
}

export default Card;