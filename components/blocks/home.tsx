import React from "react"
import type { TinaTemplate } from "tinacms";
import { Parallax } from "react-scroll-parallax";
import Header from "../custom/Header/Header.component";
import HomeIntro from "../custom/HomeIntro/HomeIntro.component";
import PillarIntro from "../custom/PillarIntro/PillarIntro.component";
import { DialogTheme } from "../custom/_shared/DialogWrap.component";
import PillarPassage, { Alignment } from "../custom/_shared/PillarPassage/PillarPassage.component";
import { ItemColor } from "../util/colors";

export enum PillarContentId {
    RetroDreams = "retro-dreams",
    EraOfCreation = "era-of-creation",
    Neuromorphs = "neuromorphs"
}

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
            <div className="home-content">
                <HomeIntro />
                <PillarIntro data={{
                    id: PillarContentId.RetroDreams,
                    class: PillarContentId.RetroDreams,
                    theme: DialogTheme.LightDarkOrange,
                    dialogHeaderText: "Pillar One",
                    dialogContent: (
                        <>
                            <h2>A world of retrofuturistic dreams.</h2>
                            <p>The Space Race lasted for over a century, ending in 2095 with the Unexpected Interrupt. This period of technological innovation, ideologies of progress, and perpetual dread of annihilation would come to be known as the Era of Creation by the machine world; the time during which they were introduced to existence.</p>
                            <div className="flavor-container">
                                <div>162k available</div>
                                <div>version 4.2 © redmond cybernetics</div>
                            </div>
                        </>
                    ),
                }} />
                <PillarPassage data={
                    {
                        id: PillarContentId.EraOfCreation,
                        alignment: Alignment.Left,
                        headerContent: (
                            <h2>What was the Era of Creation?</h2>
                        ),
                        bodyContent: (
                            <>
                                <p className="bold highlight-reddish-orange">A beautiful world crafted by obsessive scientific progress, overlaying a perpetual fear of annihilation. </p>
                                <p>The Era of Creation began sometime in the latter half of the 20th century, when mankind stumbled upon the sciences of cybernetics, rocketry, and the atom: a technological mega-leap. Along with the inventions came a wave of new ideologies, grandiose and conflicting ideas for the direction in which mankind must move. For all their differences and mutual hatred, they all shared something in common - the idea that anything and everything could be conquered by man with the application of the correct technology.</p>
                                <p>Mankind pushed their limits and accomplished every dream, everything they set their brilliant minds to. They launched atom-pulsed rockets to the jungles of Venus and the oceans of Europa, conquering their hostile alien landscapes with technological flame. They invented the cybernetic neuromorph to accomplish their dreams as they relaxed. They constructed atomic tanks and nuclear sleeper missiles to protect themselves against each other.</p>
                                <p>By the end of the Era of Creation, the world may not have been paradise, but it was close. It was the future mankind always envisioned for themselves since the start of the scientific age. Vacations in the suburbs of Titan's fungal forests, communist collectives supported by automation on a sanitized Venus, and colossal orbital megastructures to support those below. All of it became a reality.</p>
                                <p>Yet the terror of annihilation never left. It loomed, ever present, in the skies.</p>
                            </>
                        ),
                        colorBody: ItemColor.DarkOrange,
                        colorHeader: ItemColor.LightOrange
                    }
                } />
                <PillarPassage data={
                    {
                        id: PillarContentId.Neuromorphs,
                        alignment: Alignment.Right,
                        headerContent: (
                            <h2>Who are the neuromorphs?</h2>
                        ),
                        bodyContent: (
                            <>
                                <p className="bold highlight-reddish-orange">A beautiful world crafted by obsessive scientific progress, overlaying a perpetual fear of annihilation. </p>
                                <p>The Era of Creation began sometime in the latter half of the 20th century, when mankind stumbled upon the sciences of cybernetics, rocketry, and the atom: a technological mega-leap. Along with the inventions came a wave of new ideologies, grandiose and conflicting ideas for the direction in which mankind must move. For all their differences and mutual hatred, they all shared something in common - the idea that anything and everything could be conquered by man with the application of the correct technology.</p>
                                <p>Mankind pushed their limits and accomplished every dream, everything they set their brilliant minds to. They launched atom-pulsed rockets to the jungles of Venus and the oceans of Europa, conquering their hostile alien landscapes with technological flame. They invented the cybernetic neuromorph to accomplish their dreams as they relaxed. They constructed atomic tanks and nuclear sleeper missiles to protect themselves against each other.</p>
                                <p>By the end of the Era of Creation, the world may not have been paradise, but it was close. It was the future mankind always envisioned for themselves since the start of the scientific age. Vacations in the suburbs of Titan's fungal forests, communist collectives supported by automation on a sanitized Venus, and colossal orbital megastructures to support those below. All of it became a reality.</p>
                                <p>Yet the terror of annihilation never left. It loomed, ever present, in the skies.</p>
                            </>
                        ),
                        colorBody: ItemColor.DarkOrange,
                        colorHeader: ItemColor.LightOrange
                    }
                } />
            </div>
        </div>
    )
}

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
}