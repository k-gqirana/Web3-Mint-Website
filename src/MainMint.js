import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import roboPunksNFT from "./RoboPunksNFT.json";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
const roboPunksNFTAddress = "0x18ef1Ea5AC6065a1980459bea75215C270c5b417";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(0.01);
  const isConnected = Boolean(accounts[0]);
  const [isLargerThan360] = useMediaQuery("(max-width: 560px)");
  // const [isLargerThan560] = useMediaQuery("(min-width: 561px)");

  // ------------------- Responsive Design ------------------------//
  const breakpoints = {
    sm: "30em", // 480px
    md: "46em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  };

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther(0.002 * mintAmount.toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 0.01) return;
    setMintAmount(mintAmount - 0.01);
  };

  const handleIncrement = () => {
    if (mintAmount >= 0.07) return;
    setMintAmount(mintAmount + 0.01);
  };

  return (
    <Flex
      justify="center"
      align="center"
      height="100vvh"
      width={{ base: "72", md: "80", lg: "auto" }}
      paddingBottom={{ sm: "70px", md: "90px", lg: "150px" }}
      marginTop={isLargerThan360 ? "8.5rem" : "3rem"}
    >
      <Box width={[200, 460, 572]}>
        <div>
          <Text
            fontSize={isLargerThan360 ? "36px" : "48px"}
            textShadow="0 5px #000000"
          >
            RoboPunks
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0px 2px 2px #000000"
          >
            {isLargerThan360 ? (
              <>
                It's 2078. Can the RoboPunks NFT save humans from destructive
                rampant NFT speculation? Mint RoboPunks to find out.
              </>
            ) : (
              <>
                <Text
                  fontSize="30px"
                  letterSpacing="-5.5%"
                  fontFamily="VT323"
                  textShadow="0px 2px 2px #000000"
                >
                  It's 2078.
                </Text>
                <Text
                  fontSize="30px"
                  letterSpacing="-5.5%"
                  fontFamily="VT323"
                  textShadow="0px 2px 2px #000000"
                >
                  Can the RoboPunks NFT save humans from destructive rampant NFT
                  speculation?
                </Text>
                <Text
                  fontSize="30px"
                  letterSpacing="-5.5%"
                  fontFamily="VT323"
                  textShadow="0px 2px 2px #000000"
                >
                  Mint RoboPunks to find out
                </Text>
              </>
            )}
          </Text>
        </div>
        {isConnected ? (
          <div>
            <Flex align="center" justify="center">
              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={mintAmount}
              />
              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              marginTop="10px"
              onClick={handleMint}
            >
              MINT NOW
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#D6517D"
          >
            You must be connected to mint.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
