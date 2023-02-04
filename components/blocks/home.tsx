import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Home = ({ data, parentField = "" }) => {
    return (
        <Section color={data.color}>
            <Container size="large">
                <span>hola!</span>
            </Container>
        </Section>
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
