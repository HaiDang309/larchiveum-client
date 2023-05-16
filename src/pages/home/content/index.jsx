import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import HomeLayout from "src/layouts/home";
import { QuizManagement } from "src/sections/@home/content/quiz";
import { DocumentManagement } from "src/sections/@home/content/document";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children} </Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const ContentPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            aria-label="basic tabs example"
          >
            <Tab label="Quizzes" {...a11yProps(0)} />
            <Tab label="Documents" {...a11yProps(1)} />
            <Tab label="Maps" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <QuizManagement />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DocumentManagement />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Maps
        </TabPanel>
      </Box>
    </Container>
  );
};

ContentPage.layout = HomeLayout;

export default ContentPage;
