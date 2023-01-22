import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";
import "../Styles/SideBar.css"

export function Side_drawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const elem = props.elem;
  const btnRef = React.useRef();

  return (
    <>
      <Box className="drawer"ref={btnRef}>
        <p  onClick={onOpen} data-cy="team_name">{elem.home_team.name}</p>
        <p  onClick={onOpen} >{elem.home_team.city}</p>
        <p onClick={onOpen} >{elem.home_team.abbreviation}</p>
        <p onClick={onOpen} >{elem.home_team.conference}</p>
        <p onClick={onOpen} >{elem.home_team.division}</p>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{elem.home_team.name}</DrawerHeader>
          <DrawerBody>
            <p data-cy="Team_full_name">Team Full name :{" "}{`${elem.home_team.city}  ${elem.home_team.name}`}</p>
            <p>Total Games in 2021 : 43</p>
            <br />
            <h2>Random Game Details : </h2>
            <div className="game_details">
              <p>Date <span>{elem.date}</span></p>
              <p> Home-Team <span>{elem.home_team.name}</span></p>
              <p> Home Team Score <span>{elem.home_team_score}</span></p>
              <p>Visitor Team <span>{elem.visitor_team.name}</span></p>
              <p>Visitor Team Score <span>{elem.visitor_team_score}</span></p>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
