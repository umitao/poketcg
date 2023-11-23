enum Subtypes {
  BABY = 'Baby',
  BASIC = 'Basic',
  STAGE1 = 'Stage 1',
  STAGE2 = 'Stage 2',
  RESTORED = 'Restored',
  MEGA = 'MEGA',
  EX = 'EX',
}

enum PokemonTypes {
  COLORLESS = 'Colorless',
  FIGHTING = 'Fighting',
  LIGHTNING = 'Lightning',
  WATER = 'Water',
  FIRE = 'Fire',
  GRASS = 'Grass',
  PSYCHIC = 'Psychic',
}

enum Abilities {
  ABILITY = 'Ability',
  'POKE-BODY' = 'Poke-Body',
  'POKE-POWER' = 'Poké-Power',
  POKEMONPOWER = 'Pokemon Power',
}

type isLegal = 'Legal' | ' Illegal';

interface ITCGPlayerPrice {
  low: number | null;
  mid: number | null;
  high: number | null;
  market: number | null;
  directLow: number | null;
}
interface IAbilities {
  name: string;
  text: string;
  type: Abilities;
}

export interface IPokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: [Subtypes];
  level: string;
  hp: string;
  types: [PokemonTypes];
  evolvesFrom: string;
  abilities: IAbilities[];
  attacks: [
    {
      name: string;
      cost: PokemonTypes[];
      convertedEnergyCost: number;
      damage: string;
      text: string;
    }
  ];
  weaknesses: [
    {
      type: string;
      value: string;
    }
  ];
  resistances: [
    {
      type: string;
      value: string;
    }
  ];
  retreatCost: PokemonTypes[];
  convertedRetreatCost: 3;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited: isLegal;
      expanded?: isLegal;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: [number];
  legalities: {
    unlimited: isLegal;
  };
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      normal?: ITCGPlayerPrice;
      holofoil?: ITCGPlayerPrice;
      reverseHolofoil?: ITCGPlayerPrice;
    };
  };
  cardmarket: {
    url: string;
    updatedAt: string;
    prices: {
      averageSellPrice: number;
      lowPrice: number;
      trendPrice: number;
      germanProLow: number;
      suggestedPrice: number;
      reverseHoloSell: number;
      reverseHoloLow: number;
      reverseHoloTrend: number;
      lowPriceExPlus: number;
      avg1: number;
      avg7: number;
      avg30: number;
      reverseHoloAvg1: number;
      reverseHoloAvg7: number;
      reverseHoloAvg30: number;
    };
  };
}

export const pokemonSample: IPokemon = {
  id: 'dp3-1',
  name: 'Ampharos',
  supertype: 'Pokémon',
  subtypes: [Subtypes.STAGE2],
  level: '52',
  hp: '130',
  types: [PokemonTypes.LIGHTNING],
  evolvesFrom: 'Flaaffy',
  abilities: [
    {
      name: 'Jamming',
      text: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
      type: Abilities['POKE-BODY'],
    },
  ],
  attacks: [
    {
      name: 'Cluster Bolt',
      cost: [
        PokemonTypes.LIGHTNING,
        PokemonTypes.COLORLESS,
        PokemonTypes.COLORLESS,
      ],
      convertedEnergyCost: 3,
      damage: '70',
      text: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
    },
  ],
  weaknesses: [
    {
      type: 'Fighting',
      value: '+30',
    },
  ],
  resistances: [
    {
      type: 'Metal',
      value: '-20',
    },
  ],
  retreatCost: [
    PokemonTypes.COLORLESS,
    PokemonTypes.COLORLESS,
    PokemonTypes.COLORLESS,
  ],
  convertedRetreatCost: 3,
  set: {
    id: 'dp3',
    name: 'Secret Wonders',
    series: 'Diamond & Pearl',
    printedTotal: 132,
    total: 132,
    legalities: {
      unlimited: 'Legal',
    },
    ptcgoCode: 'SW',
    releaseDate: '2007/11/01',
    updatedAt: '2018/03/04 10:35:00',
    images: {
      symbol: 'https://images.pokemontcg.io/dp3/symbol.png',
      logo: 'https://images.pokemontcg.io/dp3/logo.png',
    },
  },
  number: '1',
  artist: 'Kouki Saitou',
  rarity: 'Rare Holo',
  flavorText:
    "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
  nationalPokedexNumbers: [181],
  legalities: {
    unlimited: 'Legal',
  },
  images: {
    small: 'https://images.pokemontcg.io/dp3/1.png',
    large: 'https://images.pokemontcg.io/dp3/1_hires.png',
  },
  tcgplayer: {
    url: 'https://prices.pokemontcg.io/tcgplayer/dp3-1',
    updatedAt: '2023/11/23',
    prices: {
      holofoil: {
        low: 5.2,
        mid: 6.28,
        high: 29.98,
        market: 13.7,
        directLow: null,
      },
      reverseHolofoil: {
        low: 4.25,
        mid: 5.1,
        high: 19.99,
        market: 4.26,
        directLow: 3.7,
      },
    },
  },
  cardmarket: {
    url: 'https://prices.pokemontcg.io/cardmarket/dp3-1',
    updatedAt: '2023/11/23',
    prices: {
      averageSellPrice: 1.43,
      lowPrice: 0.05,
      trendPrice: 0.99,
      germanProLow: 0,
      suggestedPrice: 0,
      reverseHoloSell: 2.25,
      reverseHoloLow: 0.49,
      reverseHoloTrend: 2.62,
      lowPriceExPlus: 0.49,
      avg1: 1.75,
      avg7: 1.1,
      avg30: 1.78,
      reverseHoloAvg1: 4.99,
      reverseHoloAvg7: 1.94,
      reverseHoloAvg30: 2.71,
    },
  },
};
