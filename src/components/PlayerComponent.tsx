import { Player } from '@remotion/player';
import { PokemonStats } from '../App';
import { MyVideo } from './MyVideo';

export type PlayerComponentProps = {
  pokemon1Name: string;
  pokemon2Name: string;
  pokemon1Stats: PokemonStats;
  pokemon2Stats: PokemonStats;
  pokemon2Url: string;
  pokemon1Url: string;
  pokemon1Id: number;
  pokemon2Id: number;
  loading: boolean;
  error: string | undefined;
};

export function PlayerComponent(props: PlayerComponentProps): any {
  return (
    <Player
      component={MyVideo}
      inputProps={props}
      durationInFrames={300}
      compositionWidth={1080}
      compositionHeight={600}
      fps={30}
      // autoPlay
      controls
    />
  );
}
