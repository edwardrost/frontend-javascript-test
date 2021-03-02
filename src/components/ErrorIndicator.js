import React from 'react';

const ErrorIndicator = () => {
    return (
        <div className="tc center mt3 bg-light-green red">
            <span className="f1 lh-title">Упс!</span>
            <br/>
            <span className="f3 lh-copy">что-то не так с загрузкой с сервера</span>
            <br/>
            <span className="f3 lh-copy">но мы уже работаем, чтобы это исправить</span>
        </div>
    );
};

export default ErrorIndicator;