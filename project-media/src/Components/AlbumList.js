import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store/apis/albumApi';
import Skelecton from './Skelecton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumListItem from './AlbumListItem';

const AlbumList = ({ user }) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAlbumAdd = () => {
        addAlbum(user)
    }

    let content;

    if (isFetching || data === undefined) {
        content = <Skelecton className='h-10 w-full' times={4} />;
    } else if (error) {
        content = <div>Error Loading Data ....</div>;
    } else {
        content = data.map((album) => {
            return <AlbumListItem key={album.id} album={album} />;
          });
    }
    

    return (
        <>
            <div className='m-2 flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>Album for {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAlbumAdd}>
                    + Add Album
                </Button>
            </div>
            <div>{content}</div>
        </>
    );
    
};

export default AlbumList;
