import DOMPurify from "dompurify";

import { useAppSelector } from "../../hooks/redux";

import { CardPageContainerStyled, CardPageImage, CardPageInfoContainer, CardPageImageContainer,
  CardPageCategory, CardPageTitle, CardPageAuthors, CardPageDescription } from "./card-page-content-container-styled-components";

const CardPageContentContainer = () => {
  const { activeBook } = useAppSelector(state => state.bookReducer);

  if (activeBook !== null) {
    const { imageLinks, title, categories, authors, description } = activeBook;

    return (
      <CardPageContainerStyled>
        { imageLinks ? 
          <CardPageImageContainer>
            <CardPageImage src={imageLinks.small} />
          </CardPageImageContainer> : 
        null }
        <CardPageInfoContainer>
          <CardPageCategory>{categories?.join(" / ")}</CardPageCategory>
          <CardPageTitle>{title}</CardPageTitle>
          <CardPageAuthors>{authors?.join(", ")}</CardPageAuthors>
          {description ? <CardPageDescription dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}} /> : null}
        </CardPageInfoContainer>
      </CardPageContainerStyled>
    );
  } else {
    return null;
  }
};

export default CardPageContentContainer;