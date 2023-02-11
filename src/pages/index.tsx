import React from 'react';

import type { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import type { DiscourseContextType } from '@contexts/core/DiscourseContext/types';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

import {
    ButtonChildrenMotionComponent,
    ButtonGroupMotionComponent, ContainerComponent,
    DiscourseFieldComponent, DividerComponent, TextConceptComponent
} from '@components/core';

import { DiscourseContext } from '@contexts/core/DiscourseContext';

import { ReloadIcon, ReaderIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import SocialShareButtonGroupComponent from '@components/core/SocialShareButtonGroupComponent';

type DynamicIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>

type ButtonExoticMotion = {
    id: number;
    text: string;
    icon: DynamicIcon;
    onPress?: () => void;
};

interface IndexProps {}

const buttonList: ButtonExoticMotion[] = [
    {
        id: 1,
        text: 'Random',
        icon: ReloadIcon,
    },
    {
        id: 2,
        text: 'Copy the discourse',
        icon: ReaderIcon
    },
    {
        id: 3,
        text: 'Add a discourse',
        icon: PlusCircledIcon
    }
];

export const getStaticProps: GetStaticProps<IndexProps> = async (_context: GetStaticPropsContext) => {
    return {
        props: {}
    }
}

const IndexPage: NextPage<IndexProps> = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { discourse } = React.useContext(DiscourseContext) as DiscourseContextType;

    return (
        <ContainerComponent>
            <TextConceptComponent text={'Generate the discourse of wokism that is common in'} />
            <DiscourseFieldComponent text={discourse} />
            <ButtonGroupMotionComponent>
                {buttonList?.map((button) => {
                    const DynamicIcon = button.icon;

                    return (
                        <ButtonChildrenMotionComponent key={button.id}>
                            <button
                                className={'px-4 py-1.5 360px:py-2.5 768px:py-2.5 w-full flex space-x-1 text-[0.62rem] 390px:text-[0.82rem] 912px:text-base font-light justify-center items-center border-y border-x border-neutral-600 rounded-lg transition ease-in-out bg-[#f2f2f2] bg-opacity-0 hover:bg-opacity-10'}
                            >
                                <DynamicIcon className={'w-[0.53rem] h-[0.53rem] 390px:w-[0.75rem] 390px:h-[0.75rem] 912px:w-4 912px:h-4'} />
                                <span>{button.text}</span>
                            </button>
                        </ButtonChildrenMotionComponent>
                    );
                })}
            </ButtonGroupMotionComponent>
            <DividerComponent text={'Share the discourse'} />
            <SocialShareButtonGroupComponent />
        </ContainerComponent>
    );
};

export default IndexPage;
