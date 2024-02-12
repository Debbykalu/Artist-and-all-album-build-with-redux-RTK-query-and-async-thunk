import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
import PhotoList from "./PhotoList";


const AlbumListItem = ({album}) => {
    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleAlbumRemove = () => {
        removeAlbum(album);
    };
  const header = (
    <>
        <Button 
        className='mr-2' 
        loading={results.isLoading} 
        onClick={handleAlbumRemove}>
            <GoTrashcan />
        </Button>
        {album.title}
    </>
  );
        return (
                <ExpandablePanel key={album.id} header={header}>
                    <PhotoList album={album} />
                </ExpandablePanel>
        );
}

export default AlbumListItem;