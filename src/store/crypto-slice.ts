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
  logo: string;
  chartImage: string;
}

interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
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
      logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23F7931A'/%3E%3Cpath fill='%23FFFFFF' d='M23.65 14.345c.365-2.44-1.492-3.755-4.03-4.63l.825-3.31-2.015-.503-.803 3.224c-.53-.132-1.076-.256-1.62-.38l.81-3.24-2.016-.504-.825 3.31c-.44-.1-.874-.2-1.293-.306l-2.781-.695-.536 2.148s1.492.342 1.463.363c.817.204.965.745.94 1.175l-.94 3.77c.056.014.13.035.21.067l-.21-.053-1.32 5.293c-.1.248-.353.62-.924.48.02.03-1.463-.366-1.463-.366L6.5 22.736l2.71.675c.504.126.998.258 1.485.383l-.835 3.348 2.015.503.825-3.31c.55.15 1.085.288 1.61.42l-.82 3.285 2.016.504.835-3.34c3.446.652 6.034-.413 6.734-3.263.56-2.315-.04-3.655-1.715-4.525 1.22-.282 2.14-1.09 2.387-2.758zm-4.26 6.026c-.398 2.315-3.09 1.065-3.963.75l.707-2.83c.874.218 3.68.65 3.256 2.08zm.398-5.962c-.363 2.112-2.61.96-3.333.717l.64-2.57c.723.18 3.045.515 2.693 1.853z'/%3E%3C/svg%3E`,
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
      logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23627EEA'/%3E%3Cg fill='%23FFFFFF'%3E%3Cpath fill-opacity='.6' d='M16.498 4v8.87l7.497 3.35z'/%3E%3Cpath d='M16.498 4L9 16.22l7.498-3.35z'/%3E%3Cpath fill-opacity='.6' d='M16.498 21.968v6.027L24 17.616z'/%3E%3Cpath d='M16.498 27.995v-6.028L9 17.616z'/%3E%3Cpath fill-opacity='.2' d='M16.498 20.573l7.497-4.353-7.497-3.35z'/%3E%3Cpath fill-opacity='.6' d='M9 16.22l7.498 4.353v-7.703z'/%3E%3C/g%3E%3C/svg%3E`,
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
      logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%2326A17A'/%3E%3Cpath fill='%23FFFFFF' d='M22.5 13.75h-13v-4h13v4zm-1.875-3.125h-9.25v1.25h9.25v-1.25z'/%3E%3Cpath fill='%23FFFFFF' d='M9.625 15h12.75v6.25h-12.75V15zM16 19.375c1.034 0 1.875-.84 1.875-1.875s-.84-1.875-1.875-1.875-1.875.84-1.875 1.875.84 1.875 1.875 1.875z'/%3E%3C/svg%3E`,
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
      logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23F0B90B'/%3E%3Cpath fill='%23FFFFFF' d='M16 5l-9.3 9.3 2.8 2.8L16 10.6l6.5 6.5 2.8-2.8L16 5zm0 11.7l-6.5 6.5L16 29l6.5-6.5L16 16.7z'/%3E%3C/svg%3E`,
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
      logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23000'/%3E%3Cpath fill='%23FFFFFF' d='M9.5 11.5c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-9zm10 5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h5z'/%3E%3C/svg%3E`,
      chartImage:
        "data:image/svg+xml,%3Csvg viewBox='0 0 180 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q30,30 60,40 T100,20 T140,10 T180,5' stroke='%2316a34a' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
  ],
  loading: false,
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
