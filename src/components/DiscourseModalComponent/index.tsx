import React from 'react';

import { motion } from 'framer-motion';

import { Cross2Icon, StarFilledIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

interface DiscourseModalProps {
    reveal: boolean;
    enabled: () => void;
}

const DiscourseModalComponent: React.FC<DiscourseModalProps> = ({ reveal, enabled }) => {
    const [discourseText, setDiscourseText] = React.useState<string>('');

    const TextAreaOnChangeHandler = (event: any) => setDiscourseText(event.target.value);

    return (
        <>
            {reveal && (
                <div className={'w-full h-full absolute flex justify-center items-center backdrop-blur bg-black bg-opacity-20 z-50'}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={'w-[32rem] h-[41rem] 768px:h-[56rem] p-4 flex flex-col justify-between items-center rounded-md bg-[#1c1c1c]'}
                    >
                        <div className={'w-full h-full flex justify-end items-start max-h-12'}>
                            <Cross2Icon onClick={enabled} className={'w-8 h-8 transition ease-in-out cursor-pointer hover:opacity-80'} />
                        </div>
                        <div className={'w-full h-full p-6 flex flex-col space-y-5 justify-start items-start'}>
                            <div className={'flex flex-col space-y-1 justify-start items-start'}>
                                <h1 className={'inline-flex items-center font-semibold text-lg 512px:text-2xl'}>
                                    <StarFilledIcon className={'w-4 h-4 768px:w-6 768px:h-6'} />&nbsp;Add your discourse
                                </h1>
                                <span className={'font-light text-[0.73rem] 512px:text-[1rem] break-words text-neutral-400'}>
                                    Add a discourse of wokism that you think is cool and stupid at the same time. (This addition to the discourse will be sent for filtering)
                                </span>
                            </div>
                            <textarea
                                className={'w-full h-full p-2 resize-none rounded-md bg-[#f2f2f2] bg-opacity-5 max-h-full'}
                                onChange={TextAreaOnChangeHandler}
                            />
                        </div>
                        <div className={'w-full h-full px-6 py-3 max-h-24'}>
                            <button className={'w-full h-auto px-4 py-2.5 flex flex-row space-x-1 font-light text-xs 512px:text-base justify-center items-center border-y border-x border-neutral-600 rounded-md bg-[#f2f2f2] bg-opacity-0 hover:bg-opacity-10 min-h-20 max-h-full'}>
                                <EnvelopeClosedIcon />
                                <span>Submit your discourse</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default DiscourseModalComponent;
