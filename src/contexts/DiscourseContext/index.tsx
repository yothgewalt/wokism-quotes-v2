import React from 'react';

import { DiscourseContextType } from './types';

export const DiscourseContext = React.createContext<DiscourseContextType | null>(null);

const DiscourseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [discourse, setDiscourseState] = React.useState<string>('ถ้าการเมืองดี เราจะมีรัฐสวัสดิการ มีความมั่นคง กินดีอยู่ดีในชีวิต และ อยู่สุขสบายชั่วลูกชั่วหลาน');
    const setDiscourse = (text: string) => setDiscourseState(text);

    return (
        <DiscourseContext.Provider value={{ discourse, setDiscourse }}>
            {children}
        </DiscourseContext.Provider>
    );
};

export default DiscourseProvider;
