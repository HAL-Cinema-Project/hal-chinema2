import React from "react";
import { useSeatSelection } from "../hooks/useSeatSelection";
import { TicketFormModal } from "@/components/order_form/select_ticket/TicketFormModal";

// 行と列の定義
const ROWS = "ABCDEFGHIJ".split(""); // A～J の10行
const SEATS_PER_ROW = 22;            // 1～22 の22列

// 横の通路：指定した座席番号の直後に隙間を入れる（例：5 と 17 の後）
const aisleColumnAfter = [5, 17];

// 縦の通路：指定した行インデックスの直後に隙間を入れる（例：C（インデックス2）と H（インデックス7）の後）
const aisleRowAfterIndices = [2, 7];

// 欠番となる座席の定義（行 D～H の場合）
const missingSeatRows = ["D", "E", "F", "G", "H"];
const missingSeatNumbers = [1, 2, 21, 22];

interface CinemaSeatsProps {
  scheduleId: string;
}

const CinemaSeats: React.FC<CinemaSeatsProps> = ({ scheduleId }) => {
  const { selectedSeats, reservedSeats, toggleSeatSelection } = useSeatSelection();

  return (
    <div style={styles.container}>
      {/* ヘッダー部分 */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h2>座席予約</h2>
          <p>ご希望の座席をお選びください。</p>
        </div>
        <div style={styles.headerRight}>
          {/* TicketFormModal を埋め込み、機能を利用 */}
          <TicketFormModal scheduleId={scheduleId} />
        </div>
      </div>

      {/* 座席グリッド */}
      <div style={styles.seatGrid}>
        {ROWS.map((row, rowIndex) => (
          <React.Fragment key={row}>
            <div style={styles.row}>
              {Array.from({ length: SEATS_PER_ROW }, (_, seatIndex) => {
                const seatNumber = seatIndex + 1;
                // 欠番の場合はプレースホルダーを表示
                if (missingSeatRows.includes(row) && missingSeatNumbers.includes(seatNumber)) {
                  return (
                    <React.Fragment key={seatNumber}>
                      <div style={styles.missingSeat} />
                      {aisleColumnAfter.includes(seatNumber) && <div style={styles.columnGap} />}
                    </React.Fragment>
                  );
                }
                // 通常の座席ボタン
                const seat = { row, number: seatNumber };
                const isSelected = selectedSeats.some(
                  (s) => s.row === row && s.number === seatNumber
                );
                const isReserved = reservedSeats.some(
                  (s) => s.row === row && s.number === seatNumber
                );
                return (
                  <React.Fragment key={seatNumber}>
                    <button
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
                      {row}
                      {seatNumber}
                    </button>
                    {aisleColumnAfter.includes(seatNumber) && <div style={styles.columnGap} />}
                  </React.Fragment>
                );
              })}
            </div>
            {aisleRowAfterIndices.includes(rowIndex) && <div style={styles.rowGap} />}
          </React.Fragment>
        ))}
      </div>

      {/* 凡例 */}
      <div style={styles.legend}>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "blue" }} />
          <span>選択可能（空席）</span>
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "red" }} />
          <span>選択席</span>
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "white" }} />
          <span>選択不可（購入済み/販売対象外）</span>
        </div>
      </div>
    </div>
  );
};

// インラインスタイルの定義
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2f2f2f",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "1200px", // 幅を1200pxに固定
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
  },
  headerLeft: {
    // 必要に応じて追加スタイルを設定
  },
  headerRight: {
    textAlign: "right",
    // 必要に応じて追加スタイルを設定
  },
  seatGrid: {
    display: "flex",
    flexDirection: "column",
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
  missingSeat: {
    width: "40px",
    height: "40px",
    margin: "5px",
    borderRadius: "5px",
    backgroundColor: "transparent",
  },
  columnGap: {
    width: "20px",
  },
  rowGap: {
    height: "20px",
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
    gap: "8px",
  },
};

export default CinemaSeats;
