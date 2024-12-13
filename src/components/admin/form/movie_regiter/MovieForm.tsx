import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { movieSchema } from "./movieSchema";
import { createMovie } from "../acrions/movie";

export function MovieForm() {
  const methods = useForm({
    resolver: zodResolver(movieSchema),
  });
  const { handleSubmit } = methods;

  const fieldContainerStyle = {
    border: "1px solid #ccc", // 枠線の色とスタイル
    borderRadius: "5px", // 角を丸くする
    padding: "10px", // 内側の余白
    marginBottom: "1rem", // 下の余白
  };

  const buttonContainerStyle = {
    textAlign: "right", // 右揃え
    marginTop: "1rem", // ボタン上部の余白
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createMovie(data);
          window.location.reload();
        })}
      >
        {/* 映画情報 */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>映画情報</h2>
          <div style={fieldContainerStyle}>
            <InputField fieldName="movieName" label="映画名" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="director" label="監督" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="summary" label="概要" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="link" label="リンク" />
          </div>
        </section>

        {/* スケジュール */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>スケジュール</h2>
          <div style={fieldContainerStyle}>
            <InputField fieldName="term" type="number" label="期間（分）" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="startDate" label="開始日" />
          </div>
          <div style={fieldContainerStyle}>
            <InputField fieldName="endDate" label="終了日" />
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
