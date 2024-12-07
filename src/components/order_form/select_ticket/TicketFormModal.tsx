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
        height: "100vh",
      }}
    >
      <TicketFormProvider scheduleId={scheduleId} />
    </div>
  );
};
