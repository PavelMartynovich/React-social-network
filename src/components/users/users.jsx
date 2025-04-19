import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/149071.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize); // Исправлен расчет страниц
    let pages = [];
    let delta = 3;
    if (props.currentPage - delta > 1) {
        pages.push(1)

        for (let i = props.currentPage - delta; i <= props.currentPage; i++) {
            pages.push(i)
        }
    }
    else {
        for (let i = 1; i <= props.currentPage; i++) {
            pages.push(i)

        }
    }
    if (props.currentPage + delta < pagesCount) {

        for (let i = props.currentPage + 1; i <= props.currentPage + delta; i++) {
            pages.push(i)
        }
        pages.push(pagesCount)
    }
    else {
        for (let i = props.currentPage + 1; i <= pagesCount; i++) {
            pages.push(i)

        }
    }


    return (
        <div>
            <div>
                {/*   <span  onClick={()=>{this.onPageChanged(1)}} >{pages[0]}...</span> */}
                {pages.map(el => { // Вывод страниц

                    return <span key={el} className={el === props.currentPage ? s.selectedPage : ''} onClick={() => { props.onPageChanged(el) }}>
                        {el != props.currentPage && el == pagesCount ? '...' : ''}{el}{' '}{el != props.currentPage && el == 1 ? '...' : ''}
                    </span>
                })}
            </div>
            {props.Users.map(el => (
                <div className={s.UsersBlock} key={el.id}>
                    <NavLink to={'/profile/' + el.id}>
                        <div className={s.ava}>
                            <img src={el.photos.small == null ? userPhoto : el.photos.small} alt="avatar" />
                        </div>
                    </NavLink>
                    <div className={s.shortInfo}>
                        Minsk <br /> {el.name}
                    </div>
                    <div className={s.follow}>
                        {el.followed ? (
                            <button onClick={() => props.unfollow(el.id)}>YOU FOLLOWED</button>
                        ) : (
                            <button onClick={() => props.follow(el.id)}>FOLLOW</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Users;
