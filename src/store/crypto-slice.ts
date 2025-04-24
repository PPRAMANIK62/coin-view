import { generateMockPriceChange } from "@/lib/mock-data";
import { createSlice } from "@reduxjs/toolkit";

export interface CryptoAsset {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chartImage: string;
}

interface CryptoState {
  assets: CryptoAsset[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  assets: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      chartImage:
        "data:image/svg+xml,%3Csvg viewBox='0 0 180 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,30 Q20,28 40,35 T80,30 T120,35 T160,25 T180,30' stroke='%2316a34a' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: 3462.15,
      change1h: 0.12,
      change24h: -1.54,
      change7d: 5.32,
      marketCap: 415702538349,
      volume24h: 18523417638,
      circulatingSupply: 120.23,
      maxSupply: null,
      chartImage:
        "data:image/svg+xml,%3Csvg viewBox='0 0 180 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,40 Q30,20 60,30 T100,20 T140,30 T180,10' stroke='%2316a34a' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      price: 1.0,
      change1h: 0.01,
      change24h: 0.02,
      change7d: -0.05,
      marketCap: 112367284394,
      volume24h: 30985432109,
      circulatingSupply: 112.37,
      maxSupply: null,
      chartImage:
        "data:image/svg+xml,%3Csvg viewBox='0 0 180 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,30 Q30,30 60,29 T100,31 T140,30 T180,30' stroke='%23737373' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 4,
      name: "BNB",
      symbol: "BNB",
      price: 597.28,
      change1h: 0.32,
      change24h: 2.17,
      change7d: -1.23,
      marketCap: 91532951234,
      volume24h: 2154367890,
      circulatingSupply: 153.25,
      maxSupply: 200,
      chartImage:
        "data:image/svg+xml,%3Csvg viewBox='0 0 180 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 Q30,40 60,15 T120,30 T180,20' stroke='%23dc2626' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 5,
      name: "Solana",
      symbol: "SOL",
      price: 175.63,
      change1h: -0.78,
      change24h: 3.45,
      change7d: 15.67,
      marketCap: 76498321567,
      volume24h: 4387654321,
      circulatingSupply: 435.5,
      maxSupply: 600,
      chartImage:
        "data:image/svg+xml,%3Csvg viewBox='0 0 180 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q30,30 60,40 T100,20 T140,10 T180,5' stroke='%2316a34a' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
  ],
  isLoading: false,
  error: null,
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map((asset) => ({
        ...asset,
        price: asset.price * (1 + generateMockPriceChange()),
        change1h: generateMockPriceChange() * 100,
        change24h: generateMockPriceChange() * 100,
        change7d: asset.change7d + generateMockPriceChange() * 2,
        volume24h: asset.volume24h * (1 + generateMockPriceChange() / 10),
      }));
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
