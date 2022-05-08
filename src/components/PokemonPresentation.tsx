import { useCurrentFrame } from 'remotion';
import { PokemonStats } from '../App';
import { PokemonSvg } from './PokemonSvg';



export type Skills = {
  [K in 'speed' | 'hp' | 'attack' | 'defense']: number; 
}

type PokemonPresentationProps = {
  name: string
  stats: PokemonStats;
  children: JSX.Element;
  skills: Skills;
  statsToTheLeft?: boolean;
  willStartFight?: boolean;
  id: number;
};

export const PokemonPresentation = (props: PokemonPresentationProps) => {
  const frame = useCurrentFrame();
  return (
    <div
      className={`bg-gradient-to-b from-white to-blue-500 w-full flex ${props.statsToTheLeft ? 'flex-row-reverse' : 'flex-row'} items-center justify-center`}
    >
      {props.children}
      <div className={`pt-8 text-center ${props.statsToTheLeft ? 'pr-8' : 'pl-8'}`}>
      <p className='capitalize font-bold'>{props.name}</p>
      <p>{'HP'}: {props.stats[0].base_stat}</p>
      <p className='capitalize'>{props.stats[1].stat.name}: {props.stats[1].base_stat}</p>
      <p className='capitalize'>{props.stats[2].stat.name}: {props.stats[2].base_stat}</p>
      <p className='capitalize'>{props.stats[5].stat.name}: {props.stats[5].base_stat}</p>
      </div>
    </div>
  );
};
