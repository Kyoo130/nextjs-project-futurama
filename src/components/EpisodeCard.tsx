import styled from "@emotion/styled";
import { Episodes } from "../types/Episodes";

interface EpisodeProps {
    episodesData: Episodes
  }
  
  export const EpisodeCard = ({ episodesData }: EpisodeProps) => {
    const { number, title, writers, originalAirDate, desc  } = episodesData;
  
    return (
      <EpisodeCont>
          <h2>Episode.{number}</h2>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Writers:</strong> {writers}</p>
          <p><strong>OriginalAirDate:</strong> {originalAirDate}</p>
          <p>{desc}</p>
      </EpisodeCont>
    )
  }
  
  const EpisodeCont = styled.div`
  width: 100%;
  height: 310px;
  overflow: hidden;
  margin: auto;
  padding: 0 30px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
`