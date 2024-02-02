import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import Groups2Icon from '@mui/icons-material/Groups2';
import BackHandIcon from '@mui/icons-material/BackHand';
export default function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(18,18,18)",
        width: "100%",
        height: "max-content",
        marginTop: "100px",
        padding: "5% 5%",
      }}
    >
      <Typography
        color={"secondary"}
        p={3}
        fontFamily={"fantasy"}
        textAlign={"center"}
        variant="h3"
      >
        The Shoes you really need
      </Typography>
      <Typography
        fontSize={20}
        color={"white"}
        textAlign={"center"}
        variant="body1"
      >
        Doesn’t matter your team size, we have the right tools for the right
        stage and time for your business. From small to medium startups until
        enterprise level companies, we do our best.
      </Typography>
      <Box
        marginTop={10}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background:
              "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            borderRadius: "30px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight={900} color={"white"}>
            Online support
          </Typography>
          <img width={300} height={250} src="assets/contact1.png" />
          <Typography
            variant="body2"
            fontSize={18}
            textAlign={"left"}
            p={1}
            color={"white"}
          >
            We’re here for you 24/7 including holidays and more
          </Typography>
        </Box>
        <Box
          sx={{
            width: "350px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background:
              "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            borderRadius: "30px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight={900} color={"white"}>
            Analytics
          </Typography>
          <img width={300} height={250} src="assets/contact2.png" />
          <Typography
            variant="body2"
            fontSize={18}
            textAlign={"left"}
            p={1}
            color={"white"}
          >
            Go beyond the MRR and ARR indicators and discover more.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "350px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background:
              "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            borderRadius: "30px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight={900} color={"white"}>
            Report
          </Typography>
          <img width={300} height={250} src="assets/contact3.png" />
          <Typography
            variant="body2"
            fontSize={18}
            textAlign={"left"}
            p={1}
            color={"white"}
          >
            Hyper detailed reports with team information across all channels.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            padding: "30px",
            borderBottom: "2px solid purple",
          }}
          variant="h4"
          fontWeight={900}
          textAlign={"center"}
        >
          Nothing less than excellent
        </Typography>
        <Box sx={{
          display:'flex',
          marginTop:"20px",
          alignItems:'center',
          flexWrap:'wrap',
          justifyContent:'space-evenly'
        }}>
          <Stack  width={300} direction={"column"}>
            <CampaignIcon color={'secondary'} fontSize="large" />
            <Typography color={'secondary'} fontWeight={700} variant="body2" fontSize={15}>
              Your pinion counts
            </Typography>
            <Typography color={'secondary'} variant="body2" fontSize={15}>
              Work together with your team and your suppliers effectively &
              productively.
            </Typography>
          </Stack>
          <Stack  width={300} direction={"column"}>
            <Groups2Icon color={'secondary'} fontSize="large" />
            <Typography color={'secondary'} fontWeight={700} variant="body2" fontSize={15}>
            Teamwork
            </Typography>
            <Typography color={'secondary'} variant="body2" fontSize={15}>
            Work together with your team and your suppliers effectively & productively.
            </Typography>
          </Stack>
          <Stack  width={300} direction={"column"}>
            <BackHandIcon color={'secondary'} fontSize="large" />
            <Typography color={'secondary'} fontWeight={700} variant="body2" fontSize={15}>
            Teamwork
            </Typography>
            <Typography color={'secondary'} variant="body2" fontSize={15}>
            Work together with your team and your suppliers effectively & productively.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
