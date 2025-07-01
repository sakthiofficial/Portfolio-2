"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";
import VerifiedIcon from "@mui/icons-material/Verified";
import MenuIcon from "@mui/icons-material/Menu";
import profileImage from "../../public/images/profile_photo.png";
import aboutImage from "../../public/images/enhanced 1.png";
import schoolIcon from "../../public/images/educationIcons/school.png";
import collegeIcon from "../../public/images/educationIcons/college.png";
import courseIcon from "../../public/images/educationIcons/course.png";

import workIcon from "../../public/images/educationIcons/work.png";
import { InputField } from "@/components/global/fields";
import axios from "axios";

function getResposiveDimentions(xs, md, lg) {
  return {
    xs,
    md,
    lg,
  };
}
const themeColors = {
  primary: "#917DB0",
  projectViewCtaBtn: "#765E9C",
  textColor: "#48454afc",
  surpriseColor: "#8ec23e",
};
const titleStyle = {
  fontSize: getResposiveDimentions("44px", "62px"),
  letterSpacing: "-3px",
  textAlign: "center",
  color: "#48454afc",
};
const themeFontSize = {
  secondaryCta: "14px",
};
const ctaBtnStyle = {};
export default function Page() {
  return (
    <Grid
      container
      className="main container"
      sx={{ padding: getResposiveDimentions("0px 10px", "0px 2rem") }}
    >
      {/* <Grid container xs={12} className="scroll-tracker" /> */}

      <Hero />

      <Project />
      <AboutSection />
      <SkillSection />
      <Contact />
    </Grid>
  );
}
function Hero() {
  const navList = {
    navMenus: [
      {
        text: "about",
        link: "/about",
        color: "#000000",
        backgroundColor: "transparent",
        textCase: "lowercase",
        onHover: {
          transform: "translateY(-0.1rem)",
        },
      },
      {
        text: "projects",
        link: "/about",
        color: "#000000",
        backgroundColor: "transparent",
        textCase: "lowercase",
        onHover: {
          transform: "translateY(-0.1rem)",
        },
      },
      {
        text: "skills",
        link: "/about",
        color: "#000000",
        backgroundColor: "transparent",
        textCase: "lowercase",
        onHover: {
          transform: "translateY(-0.1rem)",
        },
      },
    ],
    navCtaBtn: {
      text: "contact",
      link: "/about",
      style: {
        color: "#fff",
        fontSize: "22px",
        textTransform: "lowercase",
        zIndex: 100,
        // filter: "drop-shadow(30px 10px 4px #4444dd)",
        fontWeight: "590",
        padding: "1px 0.4rem",
        border: "1px solid #000000",
        "&:hover": {
          backgroundColor: "#000000",
          color: "#fff",
        },
      },
    },
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const scrollToView = (target) => {
    const section = document.getElementById(target?.replace(/\s/g, ""));
    console.log(section);

    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Grid
      className="nav"
      container
      xs={12}
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: getResposiveDimentions("20vh 0rem 10vh 0rem", "10px 0rem"),
        flexWrap: "wrap",
        height: "100%",
        background: "#fff",
      }}
    >
      <Box
        className="nav-image"
        component="div"
        sx={{
          flexDirection: "column",
          justifyContent: getResposiveDimentions("star", "center"),
          alignItems: "center",
          width: "100%",
          display: "flex",
          flexGrow: 0.8,
        }}
      >
        <Box
          className="nav-image-box"
          sx={{
            height: { xs: "13rem", md: "13rem" },
            width: { xs: "13rem", md: "13rem" },
            backgroundColor: themeColors?.primary,
            borderRadius: "50%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Image
            src={profileImage}
            alt="profile"
            style={{
              objectFit: "contained",
              height: "94%",
              width: "auto",
              position: "absolute",
              bottom: "-2px",
              transform: "rotate(3deg)",
            }}
          />
        </Box>
        <Typography component="p" className="nav-title" sx={titleStyle}>
          Web Developer
        </Typography>
      </Box>
      <Box
        className="nav-items"
        component="div"
        sx={{
          display: "flex",
          justifyContent: getResposiveDimentions("center", "right"),
          width: "99%",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", cursor: "pointer" }}>
          {(navList?.navMenus || []).map((btn) => (
            <Button
              key={btn.text}
              sx={{
                backgroundColor: btn?.backgroundColor,
                color: btn?.color,
                textTransform: btn?.textCase,
                fontSize: btn?.fontSize || "22px",
                letterSpacing: "-0.5px",
                fontWeight: btn?.fontWeight || "100",
                transition: "all 0.3s ease-in-out",
                borderRadius: "10px",
                padding: "0px",
                minWidth: "0px",
                height: "2rem",
                "&:hover": btn?.onHover,
              }}
              onClick={() => scrollToView(btn.text)}
            >
              {" "}
              {btn.text}
            </Button>
          ))}
        </Box>
        <Button
          sx={{
            padding: "0px",
            minWidth: "0px",
            ...navList?.navCtaBtn?.style,
            position: "relative",
          }}
          onClick={() => scrollToView("contact")}
        >
          {navList?.navCtaBtn?.text}
          <Box
            className="nav-cta-btn-bg"
            sx={{
              background: "#000000",
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: 0,
              zIndex: -1,
            }}
          />
        </Button>
      </Box>
      <MenuIcon
        className="menu-icon"
        sx={{ display: getResposiveDimentions("block", "none"), color: "red" }}
      />
    </Grid>
  );
}

function Project() {
  const projectList = [
    {
      title: "Library Management System",
      description:
        "Our project, 'Library Management System,' simplifies library operations. It allows users to add and remove members, manage book inventory, and track borrowing activities. When a member wants to borrow a book, they're added to the borrow list. Upon return, members are swiftly removed from the list. This streamlined system ensures efficient management of library resources, enhancing user experience and administrative tasks.",
      imageUrl:
        "https://i.ibb.co/6yXzkGn/Screenshot-from-2024-03-12-17-42-44-1.png",
      viewLink: "https://dynamic-crisp-b7fb71.netlify.app/",
      codeLink: "https://github.com/sakthiofficial/react-library-zen",
    },
    {
      title: "Movie CRUD",
      description:
        "MovieCRUD is a user-friendly website for managing movies, offering Create, Read, Update, and Delete operations. Its key features include easy login and signup processes, along with a rating system for users. Built with React, Node.js, Express, and MongoDB, MovieCRUD ensures efficient management of movie collections while providing a seamless experience for users.",
      imageUrl:
        "https://i.ibb.co/TcF64rc/Screenshot-from-2024-04-02-12-45-50.png",
      codeLink: "https://github.com/sakthiofficial/movie-app",
      viewLink: "https://majestic-puppy-27d4a8.netlify.app/",
    },
    {
      title: "Library Admin Hub",
      description:
        "LibraryAdminHub is a user-friendly admin page designed for managing library operations efficiently using React. It offers intuitive components for administrators to oversee the library’s collection, users, and checkouts. Key features include adding, editing, and removing books from the collection, along with comprehensive user account management functionalities. With LibraryAdminHub, administrators can streamline library operations with ease.",
      imageUrl:
        "https://i.ibb.co/JxQgws7/Screenshot-from-2024-04-02-12-45-01.png",
      codeLink: "https://github.com/sakthiofficial/react-library-zen",
      viewLink: "https://dynamic-crisp-b7fb71.netlify.app/",
    },
    {
      title: "Rent Ease",
      description:
        "RentEase is a user-friendly website designed for effortless product rentals. Users can easily browse through products and add them to their cart for rental. Key features include a seamless cart system, user-friendly navigation, and secure login/signup functionalities. With RentEase, renting products becomes a breeze, offering convenience and ease of use for all users.",
      imageUrl:
        "https://i.ibb.co/GWjhS5D/Screenshot-from-2024-03-12-17-39-50-1.png",
      codeLink:
        "https://github.com/sakthiofficial/rental-site-frontend-webcode-task",
      viewLink: "https://marvelous-trifle-007873.netlify.app/",
    },
  ];
  return (
    <Grid
      container
      className="project"
      component={"section"}
      id="projects"
      sx={{
        justifyContent: "center",
        // maxHeight: getResposiveDimentions("none", "100vh"),
        position: "relative",
      }}
    >
      <Header title="Projects" subTitle="some works" />
      <Grid
        className="project-list"
        container
        item
        xs={12}
        lg={10}
        sx={{
          borderRadius: "20px 0px 0px 20px",
          padding: getResposiveDimentions("0px", "2rem"),
          // boxShadow: "0px 0px 25px #0000002b",
          border: "1px solid",
          scale: "1",
          height: getResposiveDimentions("auto", "70vh"),
          overflowY: "scroll",
          paddingBottom: "10rem !important",
          gap: "2rem",
        }}
      >
        {(projectList || []).map((project, i) => (
          <ProjectCard
            title={project?.title}
            desc={project?.description}
            img={project?.imageUrl}
            isLastProjectItem={projectList.length - 1 === i}
            direction="row-reverse"
            viewLink={project?.viewLink}
            codeLink={project?.codeLink}
          />
        ))}
      </Grid>
    </Grid>
  );
}
function Header({ title, subTitle }) {
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "fit-content",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <Typography component="p" sx={{ fontSize: "14px", color: "#695e5e" }}>
        {subTitle}
      </Typography>
      <Typography
        component="H1"
        sx={{
          fontSize: "30px",
          color: themeColors?.primary,
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
}
function ProjectCard({
  title,
  img,
  desc,
  isLastProjectItem,
  direction,
  viewLink,
  codeLink,
}) {
  const [descExpand, setDescExpand] = useState(false);
  const minimumDescLength = 20;
  const descLength = desc.split(" ").length;
  const cardSpace = "80px";
  const router = useRouter();
  const handleViewClick = () => {
    window.open(viewLink, "_blank");
  };
  const handleCodeClick = () => {
    window.open(codeLink, "_blank");
  };
  return (
    <Grid
      container
      item
      xs={12}
      className="project-container"
      sx={{
        justifyContent: "space-around",
        flexDirection: getResposiveDimentions("row", direction),
        height: getResposiveDimentions("fit-content", "12rem"),
      }}
    >
      <Box
        className="project-container-img"
        component="div"
        sx={{
          width: getResposiveDimentions("100%", "35%"),
          height: getResposiveDimentions("12rem", "100%"),
          position: "relative",
          boxShadow: "0px 0px 20px #2828284a",
          background: "#fff",
          borderRadius: "5px",
        }}
      >
        <Grid container xs={12} sx={{ height: "1.2rem", background: "#000" }} />
        <Image
          src={img}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          width: "0.7rem",
          height: "100%",

          display: getResposiveDimentions("none", "flex"),
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.3rem",
          }}
        >
          <Box
            sx={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              background: themeColors?.primary,
              zIndex: 100,
            }}
          />
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "0.2rem",
            background: "#e5e3e3",
            position: "absolute",
            top: `calc(0px)`,
            display: isLastProjectItem ? "none" : "block",
            zIndex: -100,
          }}
        />
      </Box>
      <Grid
        container
        item
        xs={12}
        lg={6}
        sx={{
          justifyContent: "left",
          paddingBottom: `${cardSpace}`,
          gap: "10px",
          padding: "0px 10px",
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: getResposiveDimentions("24px", "32px"),
            letterSpacing: "-0.5px",
            fontWeight: "200",
            color: themeColors?.textColor,
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          sx={{
            minWidth: getResposiveDimentions("100%", "600px"),
            fontSize: getResposiveDimentions("16px", "18px"),
            letterSpacing: "-0.1px",
            fontWeight: "200",
            textAlign: "left",

            color: "#574c4c",
            position: "relative",
          }}
        >
          {desc
            .split(" ")
            .splice(0, descExpand ? descLength : minimumDescLength)
            .join(" ")}
          {descLength > minimumDescLength && !descExpand ? "..." : ""}
          {descLength > minimumDescLength ? (
            <Typography
              component="span"
              onClick={() => setDescExpand(!descExpand)}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "end",
              }}
            >
              <ArrowBackIosIcon
                sx={{
                  transform: descExpand ? "rotate(90deg)" : "rotate(270deg)",
                  transition: "500ms",
                  fontSize: "26px",
                  color: "#e3dede",
                }}
              />
            </Typography>
          ) : null}
        </Typography>
        <Grid
          container
          item
          xs={12}
          sx={{
            justifyContent: "left",
            alignItems: "center",
            flexDirection: "row-reverse",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={handleViewClick}
            variant="contained"
            sx={{
              backgroundColor: themeColors?.projectViewCtaBtn,
              color: "#fff",
              fontSize: themeFontSize?.secondaryCta,
              width: "fit-content",
              height: "fit-content",
              padding: "1px 2px",

              ":hover": {
                backgroundColor: themeColors?.projectViewCtaBtn,
              },
            }}
          >
            View
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "transparent",
              color: "#000",
              boxShadow: "0px 0px 0px 0px white",
              paddingLeft: "0px",
              ":hover": {
                background: "transparent",
                boxShadow: "0px 0px 0px 0px white",
              },
            }}
          >
            <Typography
              component="span"
              sx={{ fontSize: themeFontSize?.secondaryCta }}
            >
              Code
            </Typography>
            <ArrowOutwardIcon
              sx={{
                fontSize: "20px",
                marginBottom: "5px",
                color: "black",
                ":hover": {},
              }}
            />
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: "0.1rem",
          width: "100%",
          background: "#e5e3e3",
          display: getResposiveDimentions(
            isLastProjectItem ? "none" : "block",
            "none"
          ),
          zIndex: -100,
          margin: "1rem 10px",
        }}
      />
    </Grid>
  );
}
function AboutSection() {
  const [qualificationSelectedIndex, setQualificationSelectedIndex] =
    useState(1);
  const categoryList = [
    {
      category: "work",
      icon: workIcon,
      qualificationList: [
        {
          education: "Urbanrise",
          degree: "Software Developer",
          institude: "Urbanrise, Chennai",
          experience:
            "Contributed to multiple high-impact applications including Facebook lead integration with telecalling CRM, agency lead tracking systems, and a real-time performance monitoring portal. Enhanced landing pages with UTM-based dynamic UI and maintained scalable web tools to streamline marketing operations.",
          stared: {
            year: "2023",
            month: "June",
          },
          ended: {
            year: "Present",
            month: "",
          },
        },
      ],
    },
    {
      category: "course",
      icon: courseIcon,
      qualificationList: [
        {
          education: "Full Stack Development",
          degree: "Full Stack Developer",
          institude: "Guvi Institute",
          experience:
            "Completed hands-on training in full stack development, covering frontend (React, HTML/CSS), backend (Node.js, Express), databases (MongoDB), and deployment techniques. Built full-stack projects and participated in live problem-solving sessions.",
          stared: {
            year: "2022",
            month: "January",
          },
          ended: {
            year: "2022",
            month: "December",
          },
        },
        {
          education: "AWS Cloud Essentials",
          degree: "AWS Certified Developer (Course)",
          institude: "Guvi Institute",
          experience:
            "Gained foundational knowledge of AWS services and deployment strategies, focusing on S3, Lambda, API Gateway, and DynamoDB. Built and deployed microservices using serverless architecture.",
          stared: {
            year: "2022",
            month: "June",
          },
          ended: {
            year: "2022",
            month: "August",
          },
        },
      ],
    },
    {
      category: "college",
      icon: collegeIcon,
      qualificationList: [
        {
          education: "B.Sc Computer Science",
          degree: "Bachelor of Science",
          institude: "Thiruvalluvar University",
          experience:
            "Focused on core computer science fundamentals including data structures, algorithms, DBMS, and web technologies. Participated in coding competitions and developed foundational web projects during academic tenure.",
          stared: {
            year: "2019",
            month: "June",
          },
          ended: {
            year: "2022",
            month: "April",
          },
        },
      ],
    },
    {
      category: "school",
      icon: schoolIcon,
      qualificationList: [
        {
          education: "Class XII",
          degree: "Higher Secondary Education",
          institude: "SVMHS School, Ambur",
          experience:
            "Completed higher secondary education with a focus on computer science and mathematics. Developed early interest in technology and participated in basic programming workshops.",
          stared: {
            year: "2017",
            month: "June",
          },
          ended: {
            year: "2019",
            month: "March",
          },
        },
      ],
    },
  ];
  return (
    <Grid
      container
      xs={12}
      component={"section"}
      id="about"
      sx={{
        alignItems: "center",
        justifyContent: "space-around",
        position: "relative",
      }}
      // className="scroll-snap-on"
    >
      <Header title="About me" subTitle="my introduction" />
      <Grid
        item
        container
        xs={12}
        lg={6}
        sx={{
          alignItems: getResposiveDimentions("end", "center"),
        }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            gap: "2rem",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sx={{
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {(categoryList || []).map((categoryItem, i) => (
              <AboutCard
                category={categoryItem?.category}
                qualificationList={categoryItem?.qualificationList}
                connectionLine={categoryList.length - 1 > i}
                index={i}
                qualificationSelectedIndex={qualificationSelectedIndex}
                setQualificationSelectedIndex={setQualificationSelectedIndex}
                isLastCategory={i === categoryList.length - 1}
                icon={categoryItem?.icon}
                itemLength={categoryList?.length}
              />
            ))}
            <Box
              component={"div"}
              sx={{
                position: "absolute",
                left: "0",
                right: 0,
                height: "0.05rem",
                background: "#d9d9d9",
                top: "50%",
                zIndex: "-2",
              }}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              top: getResposiveDimentions("0px", "250%"),
              left: getResposiveDimentions("0px", "0rem"),

              zIndex: "10",
              bottom: "10%",
              display: "flex",
              alignItems: "center",
              height: { xs: "80%", md: "fit-content" },
            }}
          >
            <Grid
              item
              container
              xs={12}
              className="qualification-list"
              sx={{
                borderRadius: "20px",
                border: `1px solid ${themeColors?.primary}`,
                background: "#fff",
                padding: "0.5rem 10px",
                marginTop: "10px",
                overflowY: "scroll",
                gap: "40px",
                maxHeight: { xs: "100%", md: "50vh" },
                height: { xs: "100%", md: "50vh" },
              }}
            >
              {(
                categoryList[qualificationSelectedIndex]?.qualificationList ||
                []
              ).map((qualification, i) => {
                return (
                  <Grid
                    item
                    container
                    xs={12}
                    sx={{
                      height: "fit-content",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      container
                      xs={8}
                      lg={6}
                      sx={{ flexDirection: "column" }}
                    >
                      <Typography
                        component="h1"
                        sx={{
                          fontSize: getResposiveDimentions("20px", "23px"),
                          textTransform: "capitalize",
                        }}
                      >
                        {qualification?.degree}
                      </Typography>
                      <Typography
                        component="h1"
                        sx={{
                          fontSize: getResposiveDimentions("16px", "18px"),
                          fontWeight: "200",
                          color: "#515357",
                        }}
                      >
                        {qualification?.education}
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={4}
                      lg={6}
                      sx={{
                        justifyContent: "right",
                      }}
                    >
                      <Grid
                        item
                        container
                        xs={3}
                        sx={{
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          compnent="p"
                          sx={{
                            fontSize: getResposiveDimentions("12px", "14px"),
                            fontWeight: "200",
                          }}
                        >
                          {qualification?.stared?.year}
                        </Typography>
                        <Typography
                          compnent="p"
                          sx={{
                            fontSize: getResposiveDimentions("10px", "12px"),
                            fontWeight: "200",
                            color: "#6b6b6b",
                          }}
                        >
                          {qualification?.stared?.month}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={6}
                        sx={{ flexDirection: "column", alignItems: "center" }}
                      >
                        <Typography
                          compnent="p"
                          sx={{
                            fontSize: getResposiveDimentions("12px", "14px"),
                            fontWeight: "200",
                          }}
                        >
                          {qualification?.ended?.year}
                        </Typography>
                        <Typography
                          compnent="p"
                          sx={{
                            fontSize: getResposiveDimentions("10px", "12px"),
                            fontWeight: "200",
                            color: "#6b6b6b",
                          }}
                        >
                          {qualification?.ended?.month}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container xs={12} lg={10}>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: getResposiveDimentions("14px", "16px"),
                          letterSpacing: "-0.5px",
                          margin: "1rem 0px",
                        }}
                      >
                        {qualification?.experience}
                      </Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center">
                      {/* <Box
                      component="div"
                      sx={{
                        width: "80%",
                        height: "0.1rem",
                        background: "#e5e5e5",
                        display:
                          qualificationList.length - 1 === i ? "none" : "block",
                      }}
                    /> */}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={3.4}
        xs={12}
        sx={{
          height: getResposiveDimentions("40vh", "80vh"),
          position: "relative",
          marginTop: getResposiveDimentions("50vh", "0px"),
          display: getResposiveDimentions("none", "flex"),
        }}
      >
        <Image
          fill
          src={aboutImage}
          style={{
            display: "block",
            position: "absolute",

            filter: " grayscale(100%)",
            objectFit: "contain",
          }}
        />
      </Grid>
      {/* <Box
        component="div"
        sx={{
          position: "absolute",
          width: "10rem",
          height: "5rem",
          border: "1px solid",
          borderRadius: "20px",
          right: "0px",
        }}
      /> */}
    </Grid>
  );
}
function AboutCard({
  category,
  qualificationList,
  connectionLine,
  index,
  qualificationSelectedIndex,
  setQualificationSelectedIndex,
  isLastCategory,
  icon,
  itemLength,
}) {
  const [isQualificationListOpen, setIsQualificationListOpen] = useState(false);
  const height = (100 - 5 * itemLength) / itemLength;
  useEffect(() => {
    setIsQualificationListOpen(qualificationSelectedIndex === index);
  }, [qualificationSelectedIndex]);
  const handleTitleClick = () => {
    setQualificationSelectedIndex(index);
  };

  return (
    <Box
      variant="contained"
      onClick={handleTitleClick}
      sx={{
        backgroundColor: isQualificationListOpen
          ? themeColors?.projectViewCtaBtn
          : "#a1a1a1",
        color: isQualificationListOpen ? "#fff" : "##8b8b8b",
        padding: getResposiveDimentions("5px 4px", "2px 5px"),
        textTransform: "capitalize",
        display: "flex",
        gap: getResposiveDimentions("3px", "10px"),
        alignItems: getResposiveDimentions("center", "center"),
        justifyContent: "center",
        ":hover": {
          backgroundColor: themeColors?.projectViewCtaBtn,
        },
        cursor: "pointer",
        borderRadius: "5px",
        padding: "0.5rem",
      }}
    >
      <Box
        sx={{
          width: getResposiveDimentions("20px", "25px"),
          height: getResposiveDimentions("20px", "25px"),
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Image fill src={icon} style={{}} />
      </Box>
      <Typography
        component="h1"
        sx={{
          fontSize: getResposiveDimentions("14px", themeFontSize?.secondaryCta),
          fontWeight: "500",
        }}
      >
        {category}
      </Typography>
    </Box>
  );
}
function SkillSection() {
  const skillSet = [
    {
      title: "frontend technologies",
      technoligies: [
        {
          skill: "html",
          level: 4,
        },
        {
          skill: "css",
          level: 4,
        },
        {
          skill: "javascript",
          level: 4,
        },
        {
          skill: "reactjs",
          level: 4,
        },
        {
          skill: "nextjs",
          level: 4,
        },
      ],
    },
    {
      title: "backend technologies",
      technoligies: [
        {
          skill: "nodejs",
          level: 4,
        },
        {
          skill: "expressjs",
          level: 4,
        },
        {
          skill: "sql",
          level: 1,
        },
        {
          skill: "mongodb",
          level: 4,
        },
      ],
    },
    {
      title: "learning ",
      technoligies: [
        {
          skill: "ui",
          level: 0,
        },
        {
          skill: "ux",
          level: 0,
        },
        {
          skill: "figma",
          level: 0,
        },
        {
          skill: "webgl",
          level: 0,
        },
        {
          skill: "threejs",
          level: 0,
        },
      ],
    },
  ];
  return (
    <Grid
      item
      container
      xs={12}
      component={"section"}
      id="skills"
      // className="scroll-snap-on"
      sx={{ justifyContent: "space-around", gap: "1rem" }}
    >
      <Header title="Skill" subTitle="Explore my" />
      {(skillSet || []).map((skill, i) => {
        return (
          <Grid
            item
            container
            lg={5}
            xs={12}
            sx={{
              border: "1px solid",
              borderRadius: "20px",
              minHeight: getResposiveDimentions("25vh", "30vh"),
              justifyContent: "center",
            }}
          >
            <Grid
              item
              container
              xs={10}
              sx={{
                justifyContent: "center",
                padding: "0.2rem 0px",
                height: "fit-content",
                gap: "1rem",
              }}
            >
              <Typography
                component="h1"
                sx={{
                  ...titleStyle,
                  fontSize: "24px",
                  letterSpacing: "-0.3px",
                  textTransform: "capitalize",
                }}
              >
                {skill?.title}
              </Typography>
              <Grid
                item
                container
                xs={12}
                sx={{
                  gap: "1rem",
                  justifyContent: "space-evenly",
                  position: "relative",
                }}
              >
                {(skill.technoligies || []).map((tech) => (
                  <Box
                    component="span"
                    className={i < 2 ? "stack-card" : ""}
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <VerifiedIcon
                      sx={{
                        color:
                          tech.level > 3.5
                            ? "#28689c"
                            : tech?.level === 0
                              ? "#8b8b8b"
                              : "#000",
                        fontSize: "20px",
                      }}
                    />
                    <Typography
                      component="p"
                      sx={{
                        fontSize: "20px",
                        letterSpacing: "-0.2px",
                        textTransform: "lowercase",
                      }}
                    >
                      {tech?.skill}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
function Contact() {
  const [formValues, setFormValues] = useState({});
  const [formValuesError, setFormValuesError] = useState({});

  const formInputs = [
    {
      lable: "name*",
      type: "text",
      value: "name",
      formSize: 5,
    },

    {
      lable: "email",
      type: "text",
      value: "email",
      formSize: 5,
    },
    {
      lable: "feedback",
      type: "text",
      value: "feedback",
      formSize: 12,
      height: "15rem",
      multipleLine: true,
    },
  ];
  const myHighlights = [
    {
      title: "2 year experienced",
      subtitle: "software developer",
    },
    {
      title: "IITM Certified",
      subtitle: "Full Stack Developer",
    },
    {
      title: "B.sc computer science",
      subtitle: "graduate",
    },
  ];
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formValues.name) errors.name = "Name is required";
    if (
      formValues.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!formValues.feedback) errors.feedback = "Feedback is required";
    setFormValuesError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) return;

    try {
      await axios.post("/api/contact", formValues);
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission failed", err);
    }
  };

  if (submitted) {
    return (
      <Grid
        item
        xs={12}
        component={"section"}
        id="contact"
        sx={{
          textAlign: "center",
          py: 5,
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" color="primary">
          Thank you for reaching out!
        </Typography>
        <Typography>I'll get back to you soon. 🚀</Typography>
      </Grid>
    );
  }
  return (
    <Grid
      item
      container
      // className="scroll-snap-on"
      sx={{
        justifyContent: "space-around",
        alignItems: "start",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      <Grid item container xs={12} sx={{ height: "fit-content" }}>
        <Header subTitle="you can" title="Contact" />
      </Grid>
      <Grid item container xs={12} lg={5}>
        <Grid
          item
          container
          xs={12}
          sx={{
            height: "fit-content",
            justifyContent: "space-evenly",
            gap: "1rem",
          }}
        >
          {(myHighlights || []).map((highlight) => {
            return (
              <Grid item container xs={5} lg={5.8}>
                <ContactCard
                  title={highlight?.title}
                  subTitle={highlight?.subtitle}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={5}
        xs={12}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          margin: { xs: "1rem 0px", md: "0px" },
        }}
      >
        <Grid
          item
          container
          xs={12}
          sx={{
            height: "fit-content",
            gap: "1rem",
            justifyContent: "space-between",
            background: { xs: "#996fb23b", md: "#fff" },
            padding: { xs: "1rem", md: "0px" },
            borderRadius: "20px",
          }}
        >
          {(formInputs || []).map((input) => {
            return (
              <Grid item xs={input?.formSize} sx={{ height: input?.height }}>
                <InputField
                  lable={input?.lable}
                  type={input?.type}
                  value={formValues[input?.value]}
                  error={formValuesError[input?.value]}
                  handleonChange={(value) =>
                    setFormValues({ ...formValues, [input?.value]: value })
                  }
                  multipleLine={input?.multipleLine}
                />
              </Grid>
            );
          })}
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleFormSubmit}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
function ContactCard({ title, subTitle }) {
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        height: getResposiveDimentions("6rem", "10rem"),
        border: "1px solid",
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: getResposiveDimentions("17px", "clamp(17px, 24px, 28px)"),
          color: themeColors?.textColor,
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        sx={{
          color: "#858585",
          textTransform: "lowercase",
          fontSize: getResposiveDimentions("14px", "16px"),
          textAlign: "center",
        }}
      >
        {subTitle}
      </Typography>
    </Grid>
  );
}
