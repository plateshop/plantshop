import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteHeart from "../components/Heart";
import Detail from "../pages/Detail";

interface FavoriteProps {
  like: boolean;
  onClick: () => void;
}

interface Content {
  title: string;
  text: string;
  author: string;
}

const Favorite: React.FC<FavoriteProps> = (props) => {
  const [like, setLike] = useState<boolean>(false);
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(/* 요청 URL을 입력 */);
        if (res.data.type === "liked") setLike(true);
      } catch (error) {
        console.error("데이터 가져오기 실패", error);
      }
    };

    fetchData();
  }, []);

  const toggleLike = async () => {
    try {
      const res = await axios.post(/* POST 요청 URL을 입력 */);
      setLike((prevLike) => !prevLike);
    } catch (error) {
      console.error("좋아요 토글 실패", error);
    }
  };

  return (
    <>
      <Favorite like={like} onClick={toggleLike} />
      {/* content를 Detail 컴포넌트에 전달 */}
      <Detail content={content} />
    </>
  );
};

export default Favorite;
