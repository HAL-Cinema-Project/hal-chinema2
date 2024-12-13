import { useState, useEffect, createContext, ReactNode, FC } from "react";
import axios from "axios";

interface Seat {
  row: string;
  number: number;
}

interface OrderDetail {
  seatName: string;
  priceType: number;
  price: number;
}

interface Order {
  id: string;
  userId: string;
  movieName: string;
  screen: string;
  orderDetail: OrderDetail[];
}

interface Movie {
  id: string;
  movieName: string;
  director: string;
  thumbnail: string;
  summary: string;
  link: string;
  term: number;
  releaseDate: string;
  endDate: string;
  movieImage: string[];
}

interface SeatSelectionContextType {
  selectedSeats: Seat[];
  reservedSeats: Seat[];
  toggleSeatSelection: (seat: Seat) => void;
  seatCount: number;
}

export const SeatSelectionContext = createContext<SeatSelectionContextType | undefined>(undefined);

export const SeatSelectionProvider: FC<{ children: ReactNode; movieId: string }> = ({ children, movieId }) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [reservedSeats, setReservedSeats] = useState<Seat[]>([]);
  const [seatCount, setSeatCount] = useState(0);

  // 映画の詳細情報を取得する関数
  const fetchMovieDetails = async (movieId: string): Promise<string> => {
    try {
      const response = await axios.get<Movie>(`http://localhost:8011/movies/${movieId}`);
      return response.data.movieName;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      throw error;
    }
  };

  // 予約済みの座席を取得する関数
  const fetchReservedSeats = async (movieName: string) => {
    try {
      const encodedMovieName = encodeURIComponent(movieName); // ここでエンコード
      const response = await axios.get<Order[]>(`http://localhost:8012/orders?movieName=${encodedMovieName}`);
      const orders = response.data.filter(order => order.movieName === movieName);
      const reserved = orders.flatMap((order: Order) =>
        order.orderDetail.map((detail: OrderDetail) => {
          const [row, number] = detail.seatName.split("");
          return { row, number: parseInt(number) };
        })
      );
      setReservedSeats(reserved);
    } catch (error) {
      console.error("Error fetching reserved seats:", error);
    }
  };

  const toggleSeatSelection = (seat: Seat) => {
    setSelectedSeats((prev) => {
      const isAlreadySelected = prev.some((s) => s.row === seat.row && s.number === seat.number);
      if (isAlreadySelected) {
        return prev.filter((s) => s.row !== seat.row || s.number !== seat.number);
      } else {
        return [...prev, seat];
      }
    });
  };

  useEffect(() => {
    setSeatCount(selectedSeats.length);
    console.log(selectedSeats);
    console.log(seatCount);
  }, [selectedSeats, seatCount]);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(movieName => fetchReservedSeats(movieName))
      .catch(error => console.error("Error in fetching movie details or reserved seats:", error));
  }, [movieId]);

  return (
    <SeatSelectionContext.Provider
      value={{ selectedSeats, reservedSeats, toggleSeatSelection, seatCount }}
    >
      {children}
    </SeatSelectionContext.Provider>
  );
};
