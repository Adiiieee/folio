import { Modal } from "./modal";
import FullImageView from "@componens/FullImageView/full-image-view";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  if (Number.isNaN(+photoId)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullImageView id={+photoId} />
    </Modal>
  );
}
