import {
  useDisclosure,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@yamada-ui/react";
import { UserForm } from "../user_register/UserForm";

export const AddUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button style={{ margin: "0px 50px" }} onClick={onOpen}>
        Create User
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>ユーザー登録</ModalHeader>

        <ModalBody>
          <UserForm />
        </ModalBody>
        <ModalFooter>
          {/* <Button variant='ghost' onClick={onClose}>
            閉じる
          </Button> */}
        </ModalFooter>
      </Modal>
    </>
  );
};
