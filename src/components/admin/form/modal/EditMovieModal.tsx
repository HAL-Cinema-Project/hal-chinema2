import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, Button } from "@yamada-ui/react";
import { movieSchema } from "../movie_regiter/movieSchema";
import { InputField } from "../InputField";

const MovieDetailModal = ({ isOpen, onClose, movie, onSubmit }) => {
  const methods = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: movie
  });

  const { handleSubmit } = methods;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalHeader>{movie.movieName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* 映画の詳細表示 */}
          <h2>Movie Detail</h2>
          {/* 編集フォーム */}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>映画情報の編集</h2>
              <section>
                <InputField fieldName="movieName" label="映画名" />
                <InputField fieldName="director" label="監督" />
                <InputField fieldName="summary" label="概要" />
                <InputField fieldName="link" label="リンク" />
                <InputField fieldName="term" type="number" label="期間（分）" />
                <InputField fieldName="releaseDate" label="開始日" />
                <InputField fieldName="endDate" label="終了日" />
              </section>
              <Button type="submit">更新</Button>
            </form>
          </FormProvider>
        </ModalBody>
    </Modal>
  );
};

export default MovieDetailModal;
