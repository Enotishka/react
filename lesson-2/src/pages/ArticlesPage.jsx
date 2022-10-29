import { List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

export const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchArticles = async () => {
    try {
      setArticles([]);
      setLoading(true);
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const json = await response.json();
      setArticles(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      {loading && <Typography>LOADING...</Typography>}
      <List>
        {articles.map((a, i) => (
          <ListItem disablePadding key={i}>
            {a.title}
          </ListItem>
        ))}
      </List>
    </>
  );
};
