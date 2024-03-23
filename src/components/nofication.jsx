import React from 'react';
import "../css/nofication.css"
const Nofication = () => {
    return (
        <div className="container">
     <div className="noficationContainer">
        <header>
            <div className="noficationheader">
                <h1>Notification</h1>
                <span id="num-of-notif"></span>
            </div>
            <p id="mark-as-read">Mark as All Read</p>
        </header>
        <main>
            
            <div className='notificationCard unread'>
                <img alt="photo" src="
https://cdn-icons-png.flaticon.com/512/3724/3724788.png"/>
                <div className="discription">
                    <h3>Chào bạn mới</h3>
                    <p>Cảm ơn đã sử dụng Grocery App, bạn có thể dùng ...</p>
                </div>
            </div>

            <div className='notificationCard unread'>
                <img alt="photo" src="
https://cdn-icons-png.flaticon.com/512/3724/3724788.png"/>
                <div className="discription">
                    <h3>Giảm 50% lần đầu mua hàng</h3>
                    <p>Nhập WELCOME để được giảm 50% giá trị hoá đơn ...</p>
                </div>
            </div>

            <div className='notificationCard'>
                <img alt="photo" src="
https://cdn-icons-png.flaticon.com/512/3724/3724788.png"/>
                <div className="discription">
                <h3>Giảm 20% lần đầu mua hàng</h3>
                    <p>Khi mua sản phẩm với hoá đơn hơn 1 triệu được giảm 20% giá trị hoá đơn ...</p>
                </div>
            </div>

            <div className='notificationCard unread'>
                <img alt="photo" src="
https://cdn-icons-png.flaticon.com/512/3724/3724788.png"></img>
                <div className="discription">
                <h3>Giảm 50% lần đầu mua hàng</h3>
                    <p>Nhập WELCOME để được giảm 50% giá trị hoá đơn ...</p>
                </div>
            </div>



        </main>
     </div>
       </div>
    );
}

export default Nofication;
