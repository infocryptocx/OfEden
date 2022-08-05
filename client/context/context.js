import { createContext, useState, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import GUN from "gun";
import { ethers } from "ethers";

export const CryptoWorldContext = createContext();

const gun = new GUN([`${process.env.NEXT_PUBLIC_HEROKU}`]);

const initialState = { messages: [] };

const reducer = (state, action) => {
  try {
    if (action.type == "clear") return { messages: [] };
    if (action.type == "add")
      return { messages: [...state.messages, action.data] };
  } catch (error) {
    console.error(error);
  }
};

const abi = [
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

export const CryptoWorldProvider = ({ children }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentAccount, setCurrentAccount] = useState("");
  const [roomName, setRoomName] = useState("");
  const [placeholder, setPlaceholder] = useState("Message...");
  const [messageText, setMessageText] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [holderStatus, setHolderStatus] = useState("");
  const [nftHolder, setNftHolder] = useState();

  const nftaddress = "0x8bfa795dfee69438ddb4e3d41e66159771b4101c";

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [currentAccount]);

  useEffect(() => {
    if (!currentAccount) return;
    fetchCurrentAccount();
  }, [currentAccount]);

  const fetchCurrentAccount = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getCurrentUserData?account=${currentAccount}`
      );

      const data = await response.json();
      setCurrentUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setRoomName(router.query.name);
    dispatch({ type: "clear", data: {} });
    setPlaceholder(`Message #${router.query.name}`);
    setMessageText("");
    getMessages();
  }, [router.query]);

  const getMessages = () => {
    const _name = router.query.name;
    const _roomId = router.query.id;
    const messagesRef = gun.get(_name);

    messagesRef.map().once((message) => {
      dispatch({
        type: "add",
        data: {
          sender: message.sender,
          content: message.content,
          avatar: message.avatar,
          createdAt: message.createdAt,
          messageId: message.messageId,
        },
      });
    });
  };

  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return;

    try {
      const data = {
        userAddress: userAddress,
      };

      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error(error);
      }

      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createdm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return;
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      const walletAddress = accounts[0];
      const signer = await provider.getSigner();

      const nftContract = new ethers.Contract(nftaddress, abi, signer);
      const nftbalance = await nftContract.balanceOf(walletAddress);
      const nftHolderAmount = nftbalance.toNumber();
      if (nftHolderAmount === 0) {
        console.log("you dont own any nfts");
        setNftHolderStatus("Not A Hoodlumz Holder");
        return;
      }
      console.log("The balance is: ", nftHolderAmount);
      setNftHolder(true);

      const credentials = {
        nftHolder: true,
        walletAddress: walletAddress,
      };

      const userData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/connectHolder`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      console.log(userData, "credentials info");

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const walletAddress = accounts[0];
      const signer = await provider.getSigner();

      const nftContract = new ethers.Contract(nftaddress, abi, signer);
      const nftbalance = await nftContract.balanceOf(walletAddress);
      const nftHolderAmount = nftbalance.toNumber();
      if (nftHolderAmount === 0) {
        console.log("you dont own any nfts");
        alert("Not A Hoodlumz Holder");
        return;
      }
      console.log("The balance is: ", nftHolderAmount);
      setNftHolder(true);

      const credentials = {
        nftHolder: true,
        walletAddress: walletAddress,
      };

      const userData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/connectHolder`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      console.log(userData, "credentials info");
    } catch (e) {
      console.error(e);
    }

    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CryptoWorldContext.Provider
      value={{
        currentAccount,
        roomName,
        setRoomName,
        placeholder,
        messageText,
        setMessageText,
        state,
        gun,
        connectWallet,
        currentUser,
        nftHolder,
      }}
    >
      {children}
    </CryptoWorldContext.Provider>
  );
};
