
import { useState } from "react"
import { Parallax } from "react-scroll-parallax"
import DialogWrap, { DialogHeaderStyle, DialogTheme } from "../_shared/DialogWrap.component"
import SideLightsBar, { CodeTextItem, LightColumnItem, VerticalItem, VerticalItemType } from "../_shared/SideLightsBar.component"
import ModalImage from "react-modal-image";
import { ItemColor } from "../../util/colors";
import { Images } from "../../util/images";

interface PropTypes {
    data: PillarContent
}

export interface PillarContent {
    id: string
    class: string
    theme: DialogTheme
    dialogHeaderText: string
    dialogContent: JSX.Element
    images?: [
        url: string
    ]
}

const PillarIntro = ({
    data
}: PropTypes) => {
    const sideLightBarItems: (LightColumnItem | CodeTextItem)[] = [
        {
            type: VerticalItemType.LightColumnItem,
            position: "8%",
            colors: [
                ItemColor.LightOrange,
                ItemColor.DarkOrange,
                ItemColor.DarkOrange
            ],
            count: 3
        },
        {
            type: VerticalItemType.CodeTextItem,
            position: "28%",
            colors: [
                ItemColor.DarkOrange,
            ],
            text: "Muguang Ultra-Capacity Datatape"
        },

        {
            type: VerticalItemType.LightColumnItem,
            position: "90%",
            colors: [
                ItemColor.LightOrange,
                ItemColor.DarkOrange,
            ],
            count: 2
        }
    ]

    return (
        <div className="pillar-intro side-lights-wrapper">
            <Parallax speed={-30} className="pillar-background"></Parallax>
            <SideLightsBar verticalItems={sideLightBarItems} />
            <div className="dialog-wrapper side-lights-content">
                <DialogWrap content={data.dialogContent} wrapStyle={{
                    headerStyle: DialogHeaderStyle.CautionDiagonal,
                    headerTitle: data.dialogHeaderText,
                    theme: data.theme,
                }} />
                <div className="images-wrapper">
                    <DialogWrap content={
                        <ModalImage
                            small={Images.IsaacMagazineSpread.src}
                            large={Images.IsaacMagazineSpread.src}
                            alt="Hello World!"
                        />
                    } wrapStyle={{
                        headerStyle: DialogHeaderStyle.none,
                        hasHover: true
                    }} />

                    <DialogWrap content={
                        <ModalImage
                            small={Images.CraneAirlineAd.src}
                            large={Images.CraneAirlineAd.src}
                            alt="Hello World!"
                        />
                    } wrapStyle={{
                        headerStyle: DialogHeaderStyle.none,
                        hasHover: true
                    }} />

                    <DialogWrap content={
                        <ModalImage
                            small={Images.MicroDatanetAd.src}
                            large={Images.MicroDatanetAd.src}
                            alt="Hello World!"
                        />
                    } wrapStyle={{
                        headerStyle: DialogHeaderStyle.none,
                        hasHover: true
                    }} />

                </div>
            </div>
            <SideLightsBar verticalItems={sideLightBarItems} />
        </div>
    )
}

export default PillarIntro