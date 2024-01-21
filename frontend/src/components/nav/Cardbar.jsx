import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';

export default function BasicCard() {
  const navigate = useNavigate()
  function clickHandler() {
    navigate("/calendar")
  }

  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Crop Calendar</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=2670&auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Crop Calendar</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Crop Calendar
          </Typography>
        </div>
        <Button onClick={clickHandler}
          variant="solid"
          size="md"
          color="success"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Use
        </Button>
      </CardContent>
    </Card>
  );
}