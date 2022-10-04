import styles from "../styles/chatView.module.css";
import MessageForm from "./MessageForm";
import { useContext } from "react";
import MessageCard from "./MessageCard";
import { CryptoWorldContext } from "../context/context";

const ChatView = () => {
  const { state } = useContext(CryptoWorldContext);

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value);

      return (
        index ===
        state.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });

    return uniqueArray;
  };
  return (
    <div className={styles.chatView}>
      <div className={styles.messagesContainer}>
        {formattedMessagesArray().map((message, index) => (
          <MessageCard
            key={index}
            avatar={message.avatar}
            sender={message.sender}
            timestamp={message.createdAt}
            content={message.content}
          />
        ))}
      </div>
      <MessageForm />
    </div>
  );
};

export default ChatView;
