import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  // const imageSrc = () => {
  //   if (!songData && !artistData) {
  //     return <></>;
  //   }

  // if (artistId === true) {
  //   artistData.artists[artistId].attributes?.artwork?.url
  //     .replace("{w}", "500")
  //     .replace("{h}", "500");
  // } else {
  //   songData.images?.coverart;
  // }

  // ---------------TERNARY--------------------

  //   artistId
  //     ? artistData.artists[artistId].attributes?.artwork?.url
  //         .rplace("{w}", "500")
  //         .replace("{h}", "500")
  //     : songData.images?.coverart;
  // };
  const artist = artistData?.artists[artistId].attributes;

  // const artistsId = () => {
  //   if (!artistId) {
  //     return (
  //       <Link>
  //         <p>{songData?.subtitle}</p>
  //       </Link>
  //     );
  //   }
  // };

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 rounded-xl" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={artistId ? artist?.artwork?.url : songData?.images?.coverart}
          alt="artist cover art"
          className="sm:w-38 w-28 sm:h-38 h-28 rounded-full object-cover border-2 shadow-xl shadow-black ml-3"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24 " />
    </div>
  );
};

export default DetailsHeader;
