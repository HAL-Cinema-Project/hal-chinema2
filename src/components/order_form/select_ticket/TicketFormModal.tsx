import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@yamada-ui/react";
import { TicketFormProvider } from "./TicketForm";

interface TicketFormModalProps {
  scheduleId: string;
}

export const TicketFormModal: React.FC<TicketFormModalProps> = (
  props: TicketFormModalProps
) => {
  const { scheduleId } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={onOpen}>チケット選択</Button>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalHeader>チケット選択</ModalHeader>
          <ModalBody>
            <TicketFormProvider scheduleId={scheduleId} />
          </ModalBody>
        </Modal>
      </>
    </div>
  );
};
