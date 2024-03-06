import { Card, CardContent, Typography } from "@mui/material";

const FeedCard = () => {
  return (
    <Card className="tw-rounded-md tw-shadow-md tw-overflow-hidden tw-my-4  sm:tw-mx-4">
      <CardContent className="tw-flex tw-flex-col tw-justify-between tw-py-4 tw-px-4 sm:tw-px-8 md:tw-px-12 lg:tw-px-16">
        <Typography variant="h6" className="tw-font-bold">
          Vimal Mudalagi
        </Typography>
        <Typography variant="subtitle1" className="tw-text-slate-500">
          @vimalmudalagi
        </Typography>

        <Typography variant="body1" className="tw-text-slate-700">
          14h coding for hours is fine, but what about health?
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
