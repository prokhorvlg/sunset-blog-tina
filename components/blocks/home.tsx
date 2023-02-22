import * as React from "react";
import type { TinaTemplate } from "tinacms";
import { Parallax } from "react-scroll-parallax";
import Header from "../custom/Header/Header.component";
import HomeIntro from "../custom/HomeIntro/HomeIntro.component";
import PillarIntro from "../custom/PillarIntro/PillarIntro.component";

export const Home = ({ data, parentField = "" }) => {
    const pillarOneData = pillarContent.find((i) => i.id === Pillar.RetroDreams)

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
            <div className="home-content">
                <HomeIntro />
                <PillarIntro data={pillarOneData} />
            </div>
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

export interface PillarContent {
    id: Pillar
    class: string
    dialogHeaderText: string
    dialogContent: JSX.Element
    dialogFlavorLeft: string
    dialogFlavorRight: string
    images?: [
        url: string
    ]
}

enum Pillar {
    RetroDreams = "retro-dreams",
}

const pillarContent: PillarContent[] = [
    {
        id: Pillar.RetroDreams,
        class: Pillar.RetroDreams,
        dialogHeaderText: "Pillar One",
        dialogContent: (
            <>
                <h2>A world of retrofuturistic dreams.</h2>
                <p>The Space Race lasted for over a century, ending in 2095 with the Unexpected Interrupt. This period of technological innovation, ideologies of progress, and perpetual dread of annihilation would come to be known as the Era of Creation by the machine world; the time during which they were introduced to existence.</p>
            </>
        ),
        dialogFlavorLeft: "162k available",
        dialogFlavorRight: "version 4.2 © redmond cybernetics"
    }
]
