import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../InputField";
import { scheduleSchema } from "./scheduleSchema";
import { createSchedule } from "../acrions/schedule";

export function ScheduleForm() {
  const methods = useForm({
    resolver: zodResolver(scheduleSchema),
  });
  const { handleSubmit } = methods;

  const fieldContainerStyle = {
    border: "1px solid #ccc", // 枠線の色とスタイル
    borderRadius: "5px", // 角を丸くする
    padding: "10px", // 内側の余白
    marginBottom: "1rem", // 下の余白
  };

  const buttonContainerStyle = {
    textAlign: "right", // ボタンを右揃え
    marginTop: "1rem", // ボタン上部の余白
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createSchedule(data);
          window.location.reload();
        })}
      >
        {/* スケジュール情報 */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>スケジュール情報</h2>
          <div style={fieldContainerStyle}>
            <InputField fieldName="movieId" label="映画 ID" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="movieName" label="映画名" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="theater" label="劇場" />
          </div>
        </section>

        {/* 時間情報 */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>時間情報</h2>
          <div style={fieldContainerStyle}>
            <InputField fieldName="startTime" label="開始時間" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="endTime" label="終了時間" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="isAvailable" label="利用可能" />
          </div>
        </section>

        {/* 送信ボタン */}
        <div style={buttonContainerStyle}>
          <button type="submit">送信</button>
        </div>
      </form>
    </FormProvider>
  );
}
