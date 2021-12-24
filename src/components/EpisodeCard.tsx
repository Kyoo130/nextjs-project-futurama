import { Episodes } from "../types/Episodes";

interface EpisodeProps {
    episodesData: Episodes
  }
  
  export const EpisodeCard = ({ episodesData }: EpisodeProps) => {
    const { number, title, writers, originalAirDate, desc  } = episodesData;
  
    return (
      <div>
          <strong>EpisodeCard</strong>
          <p>{number}</p>
          <p>{title}</p>
          <p>{writers}</p>
          <p>{originalAirDate}</p>
          <p>{desc}</p>
          <hr/>
      </div>
    )
  }
  
  