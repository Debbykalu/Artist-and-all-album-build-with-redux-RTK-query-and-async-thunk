import {  useEffect } from "react";
import { useThunk } from "../Hooks/use-thunk";
import { fetchUsers, addUsers } from "../store";
import Button from './Button';
import { useSelector } from "react-redux";
import Skelecton from "./Skelecton";


const UsersList = () => {
    const [getFetchUsers, isLoadingUsers, loadingUserError] = useThunk(fetchUsers);
    const [getCreateUsers, isCreatingUsers, isCreatingUserError] = useThunk(addUsers);

    const { data} = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        getFetchUsers();
    }, []);

    const handleUserAdd = () => {
        getCreateUsers();
    };

    let content;
    if(isLoadingUsers){
        content = <Skelecton times={4} className='h-10 w-full'/>
    }else if 
        (loadingUserError) {
        content = <div>Error fetching data...</div> 
}else{
    content = data.map((user) => {
        return <div key={user.id} className="mb-2 border rounded mt-3">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>
        </div>
    })

}
   
  return (
    <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h3 className="m-2 text-xl">Users</h3>
            <Button loading={isCreatingUsers} onClick={handleUserAdd}>+Add user</Button>
            {isCreatingUserError && 'Error occur create users...'}
        </div>
        {content}
    </div>
  )
}

export default UsersList