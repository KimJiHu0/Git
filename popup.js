export const popup_data = () => {
    return {
        title: '제목',
        content: '내용',
        close_btn_fn: () => {
            console.log('닫기');
        },
    };
};

export const list_data = () => {
    return ['제목1', '제목2'];
};
