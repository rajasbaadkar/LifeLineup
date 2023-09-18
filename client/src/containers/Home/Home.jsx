import React from "react";
import "./home.css";
import { BiSolidGift } from "react-icons/bi"
import { BsHeartFill } from "react-icons/bs"
import { FaPeace } from "react-icons/fa"
import { Box, Typography } from '@mui/material';
import MyImg from "../../images/heroImg.jpg"
import { useNavigate } from 'react-router-dom';
import Image1 from "../../images/images.jpeg"
import Image2 from "../../images/img2.webp"
import Image3 from "../../images/patient-heart-donation.jpg"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Box height="600px" width="100%" backgroundColor="#ffe6e3" mt="4rem" display="flex">
                <img src={MyImg} style={{ position: "absolute", right: 0, top: 68, height: "500px" }} />
                <Box width="43%" display="flex" justifyContent="center" ml="8rem" flexDirection="column" gap="1rem">
                    <Typography variant='h3' sx={{ fontWeight: 600, fontFamily: "Sen" }}>Give the gift of life<br />Become an organ donor today</Typography>
                    <Typography sx={{ fontWeight: 600, fontFamily: "Inter" }}>Every 10 minutes, someone is added to the national organ transplant waiting list. Sadly, 22 people die each day waiting for a transplant that never comes.</Typography>
                    <Typography sx={{ fontWeight: 600, fontFamily: "Inter" }}>One organ donor can save eight lives and improve the lives of up to 75 people.
                        You can make a difference. Register to become an organ donor today.</Typography>
                </Box>
            </Box>

            <section id="features">
                <div className="fea">
                    <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="column" gap="1rem" justifyContent="center" alignItems="center" padding="3rem" textAlign="center" sx={{ "&:hover": { cursor: "pointer" } }}>
                            <BiSolidGift className='img-btn' size="75px" style={{ color: "red" }} />
                            <Typography variant='h5' sx={{ fontWeight: 600, fontFamily: "Sen" }}>Gift of Life</Typography>
                            <Typography>Organ donation is the ultimate gift, offering a second chance at life and the beauty it holds.</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" gap="1rem" justifyContent="center" alignItems="center" padding="3rem" textAlign="center" sx={{ "&:hover": { cursor: "pointer" } }}>
                            <FaPeace className='img-btn' size="75px" style={{ color: "red" }} />
                            <Typography variant='h5' sx={{ fontWeight: 600, fontFamily: "Sen" }}>Every Organ Counts</Typography>
                            <Typography>Each organ and tissue has life-transforming potential—never underestimate your generous impact.</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" gap="1rem" justifyContent="center" alignItems="center" padding="3rem" textAlign="center" sx={{ "&:hover": { cursor: "pointer" } }}>
                            <BsHeartFill className='img-btn' size="75px" style={{ color: "red" }} />
                            <Typography variant='h5' sx={{ fontWeight: 600, fontFamily: "Sen" }}>Chain of Compassion</Typography>
                            <Typography>One donor can ignite a chain of kindness, inspiring others to save lives too.</Typography>
                        </Box>
                    </Box>
                </div>
            </section>

            <section id="testimonials">
                <div id="carousel-test-button" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="3500">
                    <div className="carousel-indicators test-but">
                        <button type="button" data-bs-target="#carousel-test-button" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel-test-button" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel-test-button" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Box>
                                <img src={Image3} style={{ objectFit: "cover" }} alt='userImage' width="1400rem" height="500rem" />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background: "radial-gradient(80.99% 71.93% at 75.66% 19.72%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)",
                                        filter: "blur(2px)",
                                    }}
                                >
                                </Box>
                                <Box position="absolute" display="flex" alignItems="center" flexDirection="column"
                                    sx={{ top: 0, left: 0 }} ml="5rem" mt="4rem">
                                    <Typography variant='h2' mt={2} width="70%" color="#fff" sx={{
                                        fontFamily: "Sen",
                                        fontSize: "3.5rem",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        lineHeight: "4rem",
                                        letterSpacing: "-0.125rem"
                                    }}>
                                        Trust in expert-verified products and the utmost safety and privacy standards with LifeLineup, ensuring confidence in organ donation and more.
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="carousel-item">
                            <Box>
                                <img src={Image2} style={{ objectFit: "cover" }} alt='userImage' width="1400rem" height="500rem" />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background: "radial-gradient(80.99% 71.93% at 75.66% 19.72%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)",
                                        filter: "blur(2px)",
                                    }}
                                >
                                </Box>
                                <Box position="absolute" display="flex" alignItems="center" flexDirection="column"
                                    sx={{ top: 0, left: 0 }} ml="5rem" mt="4rem">
                                    <Typography variant='h2' mt={2} width="70%" color="#fff" sx={{
                                        fontFamily: "Sen",
                                        fontSize: "3.5rem",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        lineHeight: "4rem",
                                        letterSpacing: "-0.125rem"
                                    }}>
                                        We provide secure matches based on various parameters, offering convenient in-person and online options to connect donors and recipients.
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="carousel-item">

                            <Box>
                                <img src={Image1} style={{ objectFit: "cover" }} alt='userImage' width="1400rem" height="500rem" />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background: "radial-gradient(80.99% 71.93% at 75.66% 19.72%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)",
                                        filter: "blur(2px)",
                                    }}
                                >
                                </Box>
                                <Box position="absolute" display="flex" alignItems="center" flexDirection="column"
                                    sx={{ top: 0, left: 0 }} ml="5rem" mt="4rem">
                                    <Typography variant='h2' mt={2} width="70%" color="#fff" sx={{
                                        fontFamily: "Sen",
                                        fontSize: "3.5rem",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        lineHeight: "4rem",
                                        letterSpacing: "-0.125rem"
                                    }}>
                                        Prioritizing speed, we swiftly connect donors and recipients, delivering hope one transplant at a time.
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel-test-button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel-test-button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section id="cta">
                <section id="cta-begin">
                    <div className="container-fluid">
                        <h3 className="cta-text">Join LifeLineup today and become a vital part of our mission to save lives, one transplant at a time. Your decision can make a life-changing difference!</h3>
                        <button className="cta-btn" type="button" onClick={() => navigate("/Donate%20Organs")}> Join Us</button>
                        <Typography padding="0rem 15rem">
                            Organ donation is the process of giving your organs and tissues to someone else who needs them. This can be done while you are alive or after you die.

                        </Typography>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Home;
