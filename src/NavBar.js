import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Spacer,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import FaceBook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import { useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiFillInfoCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { IoPeopleCircle } from "react-icons/io5";
import { TbPlugConnected } from "react-icons/tb";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  // ------------------- Responsive Design ------------------------//
  const [isLargerThan1280] = useMediaQuery("(min-width: 736px)");
  const breakpoints = {
    sm: "30em", // 480px
    md: "46em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  };

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <>
      {isLargerThan1280 ? (
        <Flex
          justify="space-between"
          align="center"
          padding={{ md: "24", lg: "32" }}
        >
          {/* Left Side - Social Media Icons */}
          <Flex
            justify="space-around"
            width={{ md: "30%", lg: "40%" }}
            padding={{ md: "0 60px", lg: "0 75px" }}
          >
            <Link href="https://facebook.com">
              <Image src={FaceBook} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://]twitter.com">
              <Image src={Twitter} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://gmail.com">
              <Image src={Email} boxSize="42px" margin="0 15px" />
            </Link>
          </Flex>

          {/* Right Side - Sections and Connect */}
          <Flex
            justify="space-around"
            align="center"
            width={{ md: "30%", lg: "40%" }}
            padding="30px"
          >
            <Box margin="0 15px">About</Box>
            <Spacer />
            <Box margin="0 15px">Mint</Box>
            <Spacer />
            <Box margin="0 15px">Team</Box>
            <Spacer />

            {/* Connect Button */}
            {isConnected ? (
              <Box margin="0 15px">Connected</Box>
            ) : (
              <Button
                backgroundColor="#D6517D"
                borderRaduis="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}
              >
                Connect
              </Button>
            )}
          </Flex>
        </Flex>
      ) : (
        <>
          <Flex justify="space-between" align="center" padding="3%">
            {/* Left Side - Social Media Icons */}
            <Flex justify="flex-start" width="40%" padding="5%">
              <Link href="https://facebook.com">
                <Image src={FaceBook} boxSize="32px" margin="0 15px" />
              </Link>
              <Link href="https://]twitter.com">
                <Image src={Twitter} boxSize="32px" margin="0 15px" />
              </Link>
              <Link href="https://gmail.com">
                <Image src={Email} boxSize="32px" margin="0 15px" />
              </Link>
            </Flex>
            <Flex justify="flex-end" marginRight="2%">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  backgroundColor="#D6517D"
                  borderRaduis="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  margin="0 15px"
                />
                <MenuList
                  padding="5px"
                  margin="5px 0"
                  backgroundColor="#D6517D"
                  borderRaduis="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                >
                  <MenuItem
                    icon={<Icon as={AiFillInfoCircle} />}
                    backgroundColor="#D6517D"
                    borderRaduis="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    fontSize="1.4rem"
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    icon={<Icon as={SiEthereum} />}
                    backgroundColor="#D6517D"
                    borderRaduis="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    fontSize="1.4rem"
                  >
                    Mint
                  </MenuItem>
                  <MenuItem
                    icon={<Icon as={IoPeopleCircle} />}
                    backgroundColor="#D6517D"
                    borderRaduis="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    fontSize="1.4rem"
                  >
                    Team
                  </MenuItem>
                  {isConnected ? (
                    <MenuItem
                      backgroundColor="#D6517D"
                      borderRaduis="5px"
                      boxShadow="0px 2px 2px 1px #0F0F0F"
                      color="white"
                      fontSize="1.4rem"
                    >
                      Connected
                    </MenuItem>
                  ) : (
                    <MenuItem
                      icon={<IconButton as={TbPlugConnected} />}
                      onClick={connectAccount}
                      backgroundColor="#D6517D"
                      borderRaduis="5px"
                      boxShadow="0px 2px 2px 1px #0F0F0F"
                      color="white"
                      fontSize="1.4rem"
                    >
                      Connect
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};

export default NavBar;
