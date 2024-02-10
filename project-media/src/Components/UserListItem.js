import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk} from '../Hooks/use-thunk';
const UserListItem = ({user}) => {
  const [getRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleDelete = () => {
    getRemoveUser(user)
  }
   return <div className="mb-2 border rounded mt-3">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                     <Button className='mr-3' loading={isLoading} onClick={handleDelete}>
                     <GoTrashcan />
                     </Button>
                     {user.name}
                     {error && <div>Error deleting user...</div>}
                </div>
            </div>
        </div>
}

export default UserListItem;