import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  function getLyricsLines(songData) {
    if (!songData) {
      return <></>;
    }

    const firstSection = songData.sections[1];
    if (firstSection.type === "LYRICS") {
      const lines = [];
      firstSection.text.map((Line, i) =>
        lines.push(<p className="text-gray-400 text-base my-1">{Line}</p>)
      );
      return lines;
    }

    return (
      <p className="text-gray-400 text-base my1">Sorry, no lyrics found!</p>
    );
  }

  return (
    <div className="flex- flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">{getLyricsLines(songData)}</div>
      </div>
    </div>
  );
};

export default SongDetails;
