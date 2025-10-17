export const UpdateObjectInArray =(Items, Id, isFollowed)=>{
    return Items.map(el =>
        el.id == Id ? { ...el, followed: isFollowed } : el
    );
   
}