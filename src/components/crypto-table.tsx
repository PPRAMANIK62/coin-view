import { formatNumber, formatSupply } from "@/lib/mock-data";
import { RootState } from "@/store";
import { updatePrices } from "@/store/crypto-slice";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state: RootState) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="text-xs font-medium text-gray-500">
              #
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500">
              Name
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              Price
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              1h %
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              24h %
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              7d %
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              Market Cap
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              Volume(24h)
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              Circulating Supply
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 text-right">
              Last 7 Days
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {assets.map((asset) => (
            <TableRow
              key={asset.id}
              className="bg-white hover:bg-gray-50 transition-colors"
            >
              {/* # */}
              <TableCell className="font-medium text-gray-700">
                {asset.id}
              </TableCell>

              {/* Name */}
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                    <img
                      src={asset.logo}
                      alt={asset.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {asset.name}
                    </div>
                    <div className="text-xs text-gray-500">{asset.symbol}</div>
                  </div>
                </div>
              </TableCell>

              {/* Price */}
              <TableCell className="text-right font-semibold">
                {formatNumber(asset.price)}
              </TableCell>

              {/* 1h % */}
              <TableCell
                className={`text-right ${
                  asset.change1h >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                <div className="flex items-center justify-end">
                  {asset.change1h >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  <span className="font-medium">
                    {Math.abs(asset.change1h).toFixed(2)}%
                  </span>
                </div>
              </TableCell>

              {/* 24h % */}
              <TableCell
                className={`text-right ${
                  asset.change24h >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                <div className="flex items-center justify-end">
                  {asset.change24h >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  <span className="font-medium">
                    {Math.abs(asset.change24h).toFixed(2)}%
                  </span>
                </div>
              </TableCell>

              {/* 7d % */}
              <TableCell
                className={`text-right ${
                  asset.change7d >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                <div className="flex items-center justify-end">
                  {asset.change7d >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  <span className="font-medium">
                    {Math.abs(asset.change7d).toFixed(2)}%
                  </span>
                </div>
              </TableCell>

              {/* Market Cap */}
              <TableCell className="text-right font-medium text-gray-700">
                {formatNumber(asset.marketCap)}
              </TableCell>

              {/* Volume(24h) */}
              <TableCell className="text-right font-medium text-gray-700">
                {formatNumber(asset.volume24h)}
              </TableCell>

              {/* Circulating Supply */}
              <TableCell className="text-right font-medium text-gray-700">
                <div className="flex items-end justify-end flex-col gap-y-1.5">
                  <p>{formatSupply(asset.circulatingSupply, asset.symbol)}</p>
                  {asset.maxSupply && (
                    <div className="ml-2 w-16 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{
                          width: `${
                            (asset.circulatingSupply / asset.maxSupply) * 100
                          }%`,
                        }}
                      />
                    </div>
                  )}
                </div>
              </TableCell>

              {/* Last 7 Days */}
              <TableCell className="text-right">
                <div className="w-24 h-12 ml-auto">
                  <img
                    src={asset.chartImage}
                    alt={`${asset.name} 7d chart`}
                    className="w-full h-full"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoTable;
