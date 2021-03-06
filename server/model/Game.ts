export interface GamePartial {
  id: string;
  bidderId: string;
  partnerId?: string;
  timestamp: string;
  numberOfPlayers: number;
  bidAmount: number;
  points: number;
  slam: boolean;
}

export interface Game extends GamePartial {
  handData: HandData;
}

export interface HandData {
  bidder: PlayerHand;
  partner?: PlayerHand;
  opposition: PlayerHand[];
}

export interface PlayerHand {
  id: string;
  handId: string;
  pointsEarned: number;
  showedTrump: boolean;
  oneLast: boolean;
}