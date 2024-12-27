import React from 'react';
import s from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/149071.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }
    onPageChanged = (page)=>{
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize); // Исправлен расчет страниц
        let pages = [];
        let delta=3;
        if (this.props.currentPage-delta>1) {
           pages.push(1)
           
           for (let i = this.props.currentPage-delta; i <=this.props.currentPage; i++) {
            pages.push(i)           
           }
        }
        else
        {
            for (let i = 1; i<=this.props.currentPage; i++) {
            pages.push(i) 
            
        }
        }
        if (this.props.currentPage+delta<pagesCount) {
           
           for (let i = this.props.currentPage+1; i <=this.props.currentPage+delta; i++) {
            pages.push(i)           
           }
           pages.push(pagesCount)
        }
        else
        {
            for (let i = this.props.currentPage+1; i<=pagesCount; i++) {
            pages.push(i) 
            
        }
        }

        return (
            <div>
                <div>
                  {/*   <span  onClick={()=>{this.onPageChanged(1)}} >{pages[0]}...</span> */}
                    {pages.map(el => { // Вывод страниц
                      
                       return <span key={el} className={el === this.props.currentPage ? s.selectedPage : ''} onClick={()=>{this.onPageChanged(el)}}>
                            { el!=this.props.currentPage&&el==pagesCount?'...':''}{el}{' '}{ el!=this.props.currentPage&&el==1?'...':''}
                        </span>
                      })}
                </div>
                {this.props.Users.map(el => (
                    <div className={s.UsersBlock} key={el.id}>
                        <div className={s.ava}>
                            <img src={el.photos.small == null ? userPhoto : el.photos.small} alt="avatar" />
                        </div>
                        <div className={s.shortInfo}>
                            Minsk <br /> {el.name}
                        </div>
                        <div className={s.follow}>
                            {el.followed ? (
                                <button onClick={() => this.props.unfollow(el.id)}>YOU FOLLOWED</button>
                            ) : (
                                <button onClick={() => this.props.follow(el.id)}>FOLLOW</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
