import React from "react";
import { useSeatSelection } from "../hooks/useSeatSelection";
const ROWS = "ABCDEF".split("");
const SEATS_PER_ROW = 7;

const CinemaSeats = () => {
  const { selectedSeats,reservedSeats, toggleSeatSelection } = useSeatSelection();

  return (
    <div style={styles.container}>
      <h2>座席予約</h2>
      <p>ご希望の座席をお選びください。</p>
      <div style={styles.seatGrid}>
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {Array.from({ length: SEATS_PER_ROW }, (_, seatIndex) => {
              const seat = { row, number: seatIndex + 1 };
              const isSelected = selectedSeats.some(
                (s) => s.row === seat.row && s.number === seat.number
              );
              const isReserved = reservedSeats.some(
                (s) => s.row === seat.row && s.number === seat.number
              );
              return (
                <button
                  key={`${seat.row}-${seat.number}`}
                  style={{
                    ...styles.seat,
                    backgroundColor: isReserved
                      ? "white"
                      : isSelected
                      ? "red"
                      : "blue",
                    cursor: isReserved ? "not-allowed" : "pointer",
                  }}
                  onClick={() => {
                    if (!isReserved) {
                      toggleSeatSelection(seat);
                    }
                  }}
                  disabled={isReserved}
                >
                  {seat.row}
                  {seat.number}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div style={styles.legend}>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "blue" }}></div>
          <span>選択可能（空席）</span>
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "red" }}></div>
          <span>選択席</span>
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "white" }}></div>
          <span>選択不可（購入済み/販売対象外）</span>
        </div>
      </div>
    </div>
  );
};

// CSSPropertiesを使用してスタイルを定義
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2f2f2f",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "fit-content",
    margin: "0 auto",
  },
  seatGrid: {
    display: "grid",
    gap: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
  },
  seat: {
    width: "40px",
    height: "40px",
    margin: "5px",
    borderRadius: "5px",
    border: "none",
    textAlign: "center",
    lineHeight: "40px",
    fontSize: "14px",
  },
  legend: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    width: "100%",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
  },
};

export default CinemaSeats;
