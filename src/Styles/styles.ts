import { Box, Typography, styled, Card } from "@mui/material";

export const Error = styled(Typography)`
  background-color: red;
  color: white;
  width: 50%;
  margin: 10px auto;
`;

export const Container = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;

  & > span {
    position: relative;
    right: 20px;
    bottom: -15px;
    font-size: 15px;
  }

  & > button {
    position: relative;
    margin-left: 20px;
    bottom: -10px;
    font-size: 12px;
  }
`;

export const StyledCard = styled(Card)`
  width: 400px;
  margin: 10px 10px;
  text-align: left;
`;
