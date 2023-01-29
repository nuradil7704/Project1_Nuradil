import React from 'react';

function HeaderFail(props) {
    return (
        <div>
            <p className="text">
                <font color="#808080" face="Georgia">
                    Отменить в любое время в течении бесплатного пробного
                    <br/>периода. Плата за подписку начинается после окончания
                    <br/> бесплатного пробного периода.
                </font>
            </p>
            <a href="#" className="button">Попоробовать 30 дней</a>
            <a href="#" className="button">Другие абонементы</a>
            <h3 className="span"><strong>Подробнее</strong></h3>
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXos8SSTdkeCEhFM58oHyQ6P_HvI0E8Vv7Q&usqp=CAU"/>
        </div>
    );
}

export default HeaderFail;