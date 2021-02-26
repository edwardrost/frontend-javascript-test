import React from 'react';

const Details = (props) => {
    let classNames = this.props ? "tl" : "hidden"
    return (


            <div className={classNames}>
                <div className = "f6 w-100 mw8 center bg-grey">
                    <div>
                        <p>Выбран пользователь <b>{JSON.stringify(this.props)}</b></p>
                        <p>Описание:</p>
                        <textarea>
                        et lacus magna dolor...
                        </textarea>
                        <p>Адрес проживания: <b>9792 Mattis Ct</b></p>
                        <p>Город: <b>Waukesha</b></p>
                        <p>Провинция/штат: <b>WI</b></p>
                        <p>Индекс: <b>22178</b></p>
                    </div>
                </div>
            </div>
    )

}

export default Details;