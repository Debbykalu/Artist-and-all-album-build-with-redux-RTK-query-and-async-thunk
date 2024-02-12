import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoListItem from './PhotoListItem'; // Removed the extra comma
import Skelecton from "./Skelecton";

const PhotoList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResult] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  }

  let content;

  if (isFetching || data === undefined) {
    content = <Skelecton className='h-10 w-8' times={4} />; 
  } else if (error) {
    content = <div>Error Loading Data ....</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button loading={addPhotoResult.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
    </div>
    <div className="mx-8 flex flex-row flew-wrap justify-center">{content}</div>
    </>
  );
}

export default PhotoList;
