import React from 'react';

const useDiscourseModal = () => {
    const [reveal, setReveal] = React.useState<boolean>(false);
    const enabled = () => setReveal(!reveal);

    return {
        reveal,
        enabled
    };
};

export default useDiscourseModal;
