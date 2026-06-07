import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/Mediaapi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/SearchSlice";
import { useEffect } from "react";
import ResultCard from "../pages/ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading(true));
          let data = [];
          if (activeTab === "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab === "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        } finally {
          dispatch(setLoading(false));
        }
      };

      getData();
      
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap gap-6 justify-between px-3 py-3  overflow-auto">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;