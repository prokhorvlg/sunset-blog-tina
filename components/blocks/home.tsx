import * as React from "react";
import type { TinaTemplate } from "tinacms";
import { Parallax } from "react-scroll-parallax";
import Header from "../custom/Header/Header.component";
import HomeIntro from "../custom/HomeIntro/HomeIntro.component";

export const Home = ({ data, parentField = "" }) => {
    return (
        <div className="home-block">
            <Header />
            <div className="home-parallax-banner">
                <Parallax speed={-50} className="background"></Parallax>
                <Parallax speed={-20} className="subject-main"></Parallax>
                <Parallax speed={-30} className="side-tall left"></Parallax>
                <Parallax speed={-30} className="side-tall right"></Parallax>
                <div className="hero-transition"></div>
            </div>
            <HomeIntro />
        </div>
    );
};

export const homeBlockSchema: TinaTemplate = {
    name: "Home",
    label: "Home",
    ui: {
        previewSrc: "/blocks/testimonial.png",
        defaultItem: {
            tagline: "Here's some text above the other text",
        },
    },
    fields: [
        {
            type: "string",
            label: "Tagline",
            name: "tagline",
        },
    ]
};
