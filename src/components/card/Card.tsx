import { useNavigate } from "react-router-dom";

import { CardProps } from "./models/ICardProps";

import { CardContainer, CardImage, CardCategory, CardName, CardAuthor, CardImageWrapper } from "./card-styled-components";

const Card: React.FC<CardProps> = ({ data: { title, authors, categories, imageLinks, id }}) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/books/${id}`)}>
      <CardImageWrapper>
        {imageLinks ? <CardImage src={imageLinks.smallThumbnail} width="150" height="200"/> : null}
      </CardImageWrapper>
      <CardCategory>{categories ? categories[0] : ""}</CardCategory>
        <CardName >{title}</CardName>
      <CardAuthor>{authors ? authors.join(", ") : ""}</CardAuthor>
    </CardContainer>
  );
};

export default Card;