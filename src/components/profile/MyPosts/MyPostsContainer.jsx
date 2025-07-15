
import { updatePostValueActionCreator } from '../../../data/profile-reducer';
import { addPostActionCreator } from '../../../data/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (data) => {
            dispatch(addPostActionCreator(data))
        },
/*         onPostChange: (text) => {
            dispatch(updatePostValueActionCreator(text))
        } */
    }
}
const mapStateToProps = (state) => {
    return {
        Posts: state.profilePage.PostData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;