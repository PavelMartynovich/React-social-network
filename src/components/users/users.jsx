import React from 'react';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './user';




let Users = (props) => {


    return (
        <div>

            <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

            {props.Users.map(el => (<User follow ={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress} user={el}/>
                
            ))}
        </div>
    );
}


export default Users;