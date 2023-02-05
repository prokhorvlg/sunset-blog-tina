import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import HeroBackground from '../../assets/img/sunset/hero-background.png';
import HeroSubjectMain from '../../assets/img/sunset/hero-subject-main.png';
import { Parallax } from "react-scroll-parallax";

export const Home = ({ data, parentField = "" }) => {
    return (
        <div className="home-block">
            <div className="home-parallax-banner">
                <Parallax speed={-50} className="background"></Parallax>
                <Parallax speed={-30} className="subject-main"></Parallax>
            </div>
            <div className="home-content">
                <div className="home-intro-block">
                    <p>Sunset System is an existentialist worldbuilding project about the robots left behind by humanity after they vanished from the Solar System one fateful day. The project explores the machines' struggle to find meaning, the world of retrofuturistic dreams they live in, and the wild and strange ways their society may be evolving as time passes.</p>

                    <p>The project rests upon three Pillars, concepts of incredible weight that anchor the project and provide context. They correspond with the three most important moments of the setting.</p>
                </div>
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
