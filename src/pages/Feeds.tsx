import FeedCard from "../components/FeedCard";

const Feeds = () => {
  return (
    <div className="tw-flex tw-justify-between tw-flex-col tw-items-center tw-bg-slate-200 ">
      <div>
        <h1 className=" tw-text-4xl  tw-my-6  tw-mx-16">Feeds</h1>
      </div>
      <div >
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
};

export default Feeds;
