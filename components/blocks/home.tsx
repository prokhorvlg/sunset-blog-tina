import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Home = ({ data, parentField }) => {
    const theme = useTheme();
    const headlineColorClasses = {
        blue: "from-blue-400 to-blue-600",
        teal: "from-teal-400 to-teal-600",
        green: "from-green-400 to-green-600",
        red: "from-red-400 to-red-600",
        pink: "from-pink-400 to-pink-600",
        purple: "from-purple-400 to-purple-600",
        orange: "from-orange-300 to-orange-600",
        yellow: "from-yellow-400 to-yellow-600",
    };

    return (
        <Section color={data.color}>
            <Container
                size="large"
                className=""
            >
                hola!
            </Container>
        </Section>
    );
};

export const homeBlockSchema: TinaTemplate = {
    name: "Home",
    label: "Home",
    fields: []
};
