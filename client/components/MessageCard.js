import Image from "next/image";
import styles from "../styles/messageCard.module.css";

const MessageCard = ({ avatar, sender, timestamp, content }) => {
  return (
    <div className={styles.messageCard}>
      <div className={styles.messageAvatarContainer}>
        <Image
          height={40}
          width={40}
          src={avatar}
          className={styles.messageAvatar}
          alt={sender}
        />
      </div>

      <div>
        <div className={styles.messageDetails}>
          <p className="text-lg text-zinc-300 mr-2">{sender}</p>
          <small className="text-md font-bold text-zinc-500">{timestamp}</small>
        </div>
        <p className={styles.messageText}>{content}</p>
      </div>
    </div>
  );
};

export default MessageCard;
