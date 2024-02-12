import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk} from '../Hooks/use-thunk';
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
const UserListItem = ( {user} ) => {
  const [getRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleDelete = () => {
    getRemoveUser(user)
  };
  const header =  (
    <>
         <Button className='mr-3' loading={isLoading} onClick={handleDelete}>
         <GoTrashcan />
         </Button>
         {user.name}
         {error && <div>Error deleting user...</div>}
  </>
  );
   
   
   return <ExpandablePanel header={header}> <AlbumList user={user} /> </ExpandablePanel>
   
                    
               
}

export default UserListItem;