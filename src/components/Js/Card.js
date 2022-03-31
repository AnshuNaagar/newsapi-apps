import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./style/All.css";

import Pagination from "@mui/material/Pagination";
import { Button, CardActionArea, CardActions } from "@mui/material";
const CardSetBoxed = () => {
  const [elonNews, setElonNews] = useState([]);
  useEffect(() => {
    const loadNews = async () => {
      const responseNews = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-03-27&to=2022-03-27&sortBy=popularity&apiKey=391b845c95b64b0ea4a5c67fe7d31a41"
      );
      setElonNews(responseNews.data.articles);
      console.log(responseNews.data);
    };
    loadNews();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="my-5">Posts</h1>
          {elonNews &&
            elonNews.map((items, index) => {
              return (
                <>
                  <div className="col-md-4 d-flex my-3" key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={items.urlToImage}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {items.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {items.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" href={items.url}>
                          View full article
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </>
              );
            })}
        </div>
        <div className="container my-5">
          <Pagination count={10} className="m-auto" color="secondary" />
        </div>
      </div>
    </>
  );
};
export default CardSetBoxed;
